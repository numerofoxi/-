const { makeWASocket, useMultiFileAuthState, MessageType } = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');

// Funzione per eseguire il scraping su Pinterest
const searchPinterest = async (query) => {
    const url = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}&rs=typed`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    let images = [];
    $('img').each((i, element) => {
        let imgSrc = $(element).attr('src');
        if (imgSrc && imgSrc.startsWith('https://')) {
            images.push(imgSrc);
        }
    });

    return images.slice(0, 5); // Limita a 5 immagini
};

// Funzione per inviare immagini in sequenza con un effetto di "slide"
const sendImagesSlide = async (sock, to, images) => {
    for (let imgUrl of images) {
        await sock.sendMessage(to, {
            image: { url: imgUrl },
            caption: 'Ecco un’immagine trovata su Pinterest!',
        });
        await new Promise(resolve => setTimeout(resolve, 1500)); // Pausa di 1.5 secondi tra le immagini
    }
};

// Handler per il comando .immagine
const handleImmageCommand = async (sock, message, to) => {
    const text = message.text;
    
    if (text.startsWith('.immagine')) {
        const query = text.replace('.immagine', '').trim();
        if (!query) {
            await sock.sendMessage(to, { text: 'Per favore, inserisci un titolo per la ricerca.' });
            return;
        }

        try {
            const images = await searchPinterest(query);
            if (images.length === 0) {
                await sock.sendMessage(to, { text: 'Nessuna immagine trovata su Pinterest.' });
                return;
            }

            await sendImagesSlide(sock, to, images);
        } catch (error) {
            console.error('Errore durante la ricerca su Pinterest:', error);
            await sock.sendMessage(to, { text: 'Si è verificato un errore durante la ricerca delle immagini.' });
        }
    }
};

// Main function per configurare il bot
const startBot = async () => {
    const { state, saveState } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
    });

    // Handler per i messaggi
    sock.ev.on('messages.upsert', async (m) => {
        const message = m.messages[0];
        if (message.key.fromMe) return; // Ignora i messaggi inviati dal bot stesso
        
        if (message.message.conversation) {
            await handleImmageCommand(sock, message.message.conversation, message.key.remoteJid);
        }
    });

    // Salva lo stato dell'autenticazione ogni volta che cambia
    sock.ev.on('connection.update', (update) => {
        if (update.connection === 'close') {
            saveState();
        }
    });
};

startBot();

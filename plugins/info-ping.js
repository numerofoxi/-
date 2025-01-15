import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import fetch from 'node-fetch'; // Alias chiaro per node-fetch
import { performance } from 'perf_hooks';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // Calcola uptime e velocità del bot
    const uptimeMs = process.uptime() * 1000;
    const uptimeStr = clockString(uptimeMs);
    const startTime = performance.now();
    const endTime = performance.now();
    const speed = (endTime - startTime).toFixed(4);

    // Nome del bot e immagine di stato
    const botName = global.db?.data?.nomedelbot || " ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ";
    const imageResponse = await fetch('https://telegra.ph/file/2f38b3fd9cfba5935b496.jpg');

    if (!imageResponse.ok) {
      throw new Error(`Errore durante la richiesta: ${imageResponse.status}`);
    }

    // Calcola l'ora di attivazione del bot
    const botStartTime = new Date(Date.now() - uptimeMs);
    const activationTime = botStartTime.toLocaleString('it-IT', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    // Messaggio di stato
    const message = `
ꪶ⏳ꫂ͛ ══ •⊰✰⊱• ══ ꪶ⏳ꫂ͛

 ꙰ 𝟥𝟥𝟥 ꙰ ꪶ⏳ꫂ͛ 𝔹𝕆𝕋 ꙰ 
 𝐀𝐓𝐓𝐈𝐕𝐈𝐓𝐀:  ${uptimeStr} 
 ${activationTime}
 𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀: ${speed} secondi
 
ꪶ⏳ꫂ͛ ══ •⊰✰⊱• ══ ꪶ⏳ꫂ͛ 
 ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰  *Versione* ${vs}
`.trim();

    // Invio del messaggio
    await conn.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        mentionedJid: conn.parseMention(botName),
        forwardingScore: 1,
        isForwarded: true,
      },
    });
  } catch (err) {
    console.error("Errore nell'handler:", err);
  }
};

// Funzione per formattare uptime
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor((ms % 3600000) / 60000);
  let s = Math.floor((ms % 60000) / 1000);
  return [h, m, s]
    .map(v => v.toString().padStart(2, '0'))
    .join(':');
}

handler.help = ['ping'];
handler.tags = ['info'];
handler.command = /^(ping|stato|info)$/i;

export default handler;

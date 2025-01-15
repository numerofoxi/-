import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (message, { conn, usedPrefix }) => {
  const senderName = await conn.getName(message.sender);
  const targetJid = message.quoted
    ? message.quoted.sender
    : message.mentionedJid && message.mentionedJid[0]
    ? message.mentionedJid[0]
    : message.fromMe
    ? conn.user.jid
    : message.sender;

  // Immagine del profilo di chi usa il comando 😜
  const profilePicUrl = (await conn.profilePictureUrl(targetJid, "image").catch(() => null)) || "./src/avatar_contact.png";
  let profilePicBuffer;
  if (profilePicUrl !== "./src/avatar_contact.png") {
    profilePicBuffer = await (await fetch(profilePicUrl)).buffer();
  } else {
    profilePicBuffer = await (await fetch("https://telegra.ph/file/22b3e3d2a7b9f346e21b3.png")).buffer();
  }

  const botName = global.db.data.nomedelbot || " ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ";
  
  // Comandi con formattazione stilizzata
  const commandList = `
✨ *𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞* ✨
────────────────────────
➤ ${usedPrefix}𝐩𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨
➤ ${usedPrefix}𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐢
➤ ${usedPrefix}𝐚𝐝𝐦𝐢𝐧
➤ ${usedPrefix}𝐠𝐫𝐮𝐩𝐩𝐨
➤ ${usedPrefix}𝐨𝐰𝐧𝐞𝐫
➤ ${usedPrefix}𝐜𝐫𝐞𝐝𝐢𝐭𝐢
➤ ${usedPrefix}𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐨
➤ ${usedPrefix}𝐛𝐨𝐭𝐢𝐧𝐟𝐨

────────────────────────
 ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰   -  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞: ${vs}
`.trim();

  // Versione Origin Bot
  await conn.sendMessage(message.chat, {
    text: commandList,
    contextInfo: {
      mentionedJid: conn.parseMention(wm),
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363341274693350@newsletter',
        serverMessageId: '',
        newsletterName: botName
      },
      externalAdReply: {
        title: senderName,
        body: `𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞 𝐁𝐨𝐭: ${vs}`,
        mediaType: 1,
        renderLargerThumbnail: false,
        previewType: "PHOTO",
        thumbnail: profilePicBuffer,
        sourceUrl: 'ok'
      }
    }
  });
};

handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

// Formattazione del tempo (per Youns non esiste, lui è immortale)
function clockString(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor(milliseconds / 60000) % 60;
  let seconds = Math.floor(milliseconds / 1000) % 60;

  console.log({ ms: milliseconds, h: hours, m: minutes, s: seconds });
  
  return [hours, minutes, seconds].map(timeUnit => timeUnit.toString().padStart(2, '0')).join(':');
}

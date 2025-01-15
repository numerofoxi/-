let handler = async (m, { conn, isAdmin }) => {
  // Recupera i membri del gruppo
  let groupMetadata;
  try {
    groupMetadata = await conn.groupMetadata(m.chat);
  } catch {
    m.reply('Errore nel recuperare i mutati del gruppo.');
    return;
  }
  let groupMembers = groupMetadata.participants.map(participant => participant.id);

  // Filtra gli utenti e i gruppi mutati
  let users = Object.entries(global.db.data.users).filter(([jid, user]) => user.muto && groupMembers.includes(jid));

  // Costruisci il messaggio di risposta
  let caption = `
┌〔𝐔𝐭𝐞𝐧𝐭𝐢 *mutati* 👨🏻‍✈️〕
├ 𝐓𝐨𝐭𝐚𝐥𝐞 : ${users.length} ${users.length ? '\n' + users.map(([jid], i) => `
├ ${isAdmin ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
└────
`.trim();

  // Manda il messaggio con menzioni
  m.reply(caption, null, { mentions: users.map(([jid]) => jid) });
}
handler.command = /^mutelist(ned)?|mute(ed)?list|mutati?$/i
handler.admin = true
export default handler
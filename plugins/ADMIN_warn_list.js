let handler = async (m, { conn, isAdmin }) => {
    let groupMetadata = await conn.groupMetadata(m.chat);
    let groupMembers = groupMetadata.participants.map(participant => participant.id);


    let adv = Object.entries(global.db.data.users)
        .filter(([jid, user]) => user.warn && groupMembers.includes(jid));

    let caption = `⚠️ *LISTA WARN*
*╭•·–––––––––––––––––––·•*
│ *Tot : ${adv.length} User* ${adv.length ? '\n' + adv.map(([jid, user], i) => `
│
│ *${i + 1}.* ${conn.getName(jid)  == undefined ? 'Senza utenti' : conn.getName(jid) + ` *(${user.warn}/3)*`}
│ ${isAdmin ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`;

    m.reply(caption, null, { mentions: conn.parseMention(caption) });
}

handler.command = /^(listawarn|listadv|adv|advlist|advlista)$/i;

export default handler;
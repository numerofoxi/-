//Crediti By Gabs

function _0x37c8() {
  const _0x2af448 = [
    'includes',
    'sender',
    'antiinsta',
    'sendMessage',
    'user',
    '1413HccOnC',
    'groupParticipantsUpdate',
    '𝐀𝐧𝐭𝐢\x20-\x20𝐈𝐧𝐬𝐭𝐚\x20',
    'text',
    'chat',
    'remove',
    '728413PxsDvT',
    'users',
    'data',
    'instagram.com',
    '740718kABKRC',
    'exec',
    'warn',
    '1217196ottOZY',
    '0@s.whatsapp.net',
    '32TnmEHW',
    'Halo',
    '159690HAElmB',
    '582khHlyG',
    'settings',
    'isBaileys',
    '⛔\x20𝐔𝐓𝐄𝐍𝐓𝐄\x20𝐑𝐈𝐌𝐎𝐒𝐒𝐎\x20𝐃𝐎𝐏𝐎\x20𝟑\x20𝐀𝐕𝐕𝐄𝐑𝐓𝐈𝐌𝐄𝐍𝐓𝐈',
    'isGroup',
    '1640YPEKhU',
    'key',
    '*\x20°\x20𝐀𝐕𝐕𝐄𝐑𝐓𝐈𝐌𝐄𝐍𝐓𝐎\x20',
    'fromMe',
    'reply',
    '6274000IvmZhE',
    'https://telegra.ph/file/e12aae9f5ea6c2e5e52aa.png',
    '77994wiTrBA',
    'participant'
  ];
  _0x37c8 = function () {
    return _0x2af448;
  };
  return _0x37c8();
}

function _0x49c5(_0xc453ad, _0x2b38c7) {
  const _0x37c8ca = _0x37c8();
  return _0x49c5 = function (_0x49c59a, _0x1f5ff9) {
    _0x49c59a = _0x49c59a - 0x165;
    let _0x586718 = _0x37c8ca[_0x49c59a];
    return _0x586718;
  }, _0x49c5(_0xc453ad, _0x2b38c7);
}

(function (_0x2a5c63, _0x466bbd) {
  const _0x2d72d6 = _0x49c5,
    _0x2bc1da = _0x2a5c63();
  while (!![]) {
    try {
      const _0x490172 = -parseInt(_0x2d72d6(0x16a)) / 0x1 * (parseInt(_0x2d72d6(0x17c)) / 0x2) + -parseInt(_0x2d72d6(0x174)) / 0x3 + -parseInt(_0x2d72d6(0x179)) / 0x4 * (-parseInt(_0x2d72d6(0x17b)) / 0x5) + parseInt(_0x2d72d6(0x177)) / 0x6 + parseInt(_0x2d72d6(0x170)) / 0x7 + -parseInt(_0x2d72d6(0x186)) / 0x8 + parseInt(_0x2d72d6(0x188)) / 0x9 * (parseInt(_0x2d72d6(0x181)) / 0xa);
      if (_0x490172 === _0x466bbd) break;
      else _0x2bc1da['push'](_0x2bc1da['shift']());
    } catch (_0x12cf4b) {
      _0x2bc1da['push'](_0x2bc1da['shift']());
    }
  }
}(_0x37c8, 0x84282));

let linkRegex = /instagram.com/i;

export async function before(_0x216c18, { isAdmin: _0x524171, groupMetadata: _0x3b8efa, isBotAdmin: _0x282857 }) {
  const _0x43af82 = _0x49c5;

  if (_0x216c18[_0x43af82(0x17e)] && _0x216c18[_0x43af82(0x184)]) return !0x0;
  if (!_0x216c18[_0x43af82(0x180)]) return !0x1;

  let _0x2e6aea = global['db']['data']['chats'][_0x216c18[_0x43af82(0x16e)]],
    _0x3ec60 = '3',
    _0x4bfee6 = _0x216c18[_0x43af82(0x182)][_0x43af82(0x189)],
    _0x3b2aef = _0x216c18[_0x43af82(0x182)]['id'],
    _0x3c1f69 = global['db'][_0x43af82(0x172)][_0x43af82(0x17d)][this[_0x43af82(0x169)]['jid']] || {};

  const _0xd293a0 = linkRegex[_0x43af82(0x175)](_0x216c18[_0x43af82(0x16d)]),
    _0x318b8a = _0x43af82(0x173);

  if (_0x524171 && _0x2e6aea['antiinsta'] && _0x216c18['text'][_0x43af82(0x165)](_0x318b8a)) return;

  if (_0x2e6aea[_0x43af82(0x167)] && _0xd293a0 && !_0x524171 && _0x282857) {
    if (_0x282857) {
      global['db'][_0x43af82(0x172)][_0x43af82(0x171)][_0x216c18['sender']]['warn'] += 0x1;
      await conn[_0x43af82(0x168)](_0x216c18[_0x43af82(0x16e)], { 'delete': { 'remoteJid': _0x216c18[_0x43af82(0x16e)], 'fromMe': ![], 'id': _0x3b2aef, 'participant': _0x4bfee6 } });

      let _0x286443 = global['db'][_0x43af82(0x172)][_0x43af82(0x171)][_0x216c18[_0x43af82(0x166)]]['warn'],
        _0x53f0c7 = global['db'][_0x43af82(0x172)][_0x43af82(0x171)][_0x216c18[_0x43af82(0x166)]];

      if (_0x286443 < _0x3ec60) {
        let _0xe36ac7 = {
          'key': { 'participants': _0x43af82(0x178), 'fromMe': ![], 'id': _0x43af82(0x17a) },
          'message': {
            'locationMessage': {
              'name': _0x43af82(0x16c),
              'jpegThumbnail': await (await fetch(_0x43af82(0x187)))['buffer'](),
              'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Unlimited;;;\x0aFN:Unlimited\x0aORG:Unlimited\x0aTITLE:\x0aitem1.TEL;waid=19709001746:+1\x20(970)\x20900-1746\x0aitem1.X-ABLabel:Unlimited\x0aX-WA-BIZ-DESCRIPTION:ofc\x0aX-WA-BIZ-NAME:Unlimited\x0aEND:VCARD'
            }
          },
          'participant': _0x43af82(0x178)
        };
        conn[_0x43af82(0x185)](_0x216c18[_0x43af82(0x16e)], '⚠\x20𝐋𝐈𝐍𝐊\x20𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌\x20𝐍𝐎𝐍\x20𝐒𝐎𝐍𝐎\x20𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐈\x20\x0a*' + _0x53f0c7['warn'] +
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
require(`./konfs`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
var randomMC = require("random-material-color");
const vers = require(`../package.json`);
const canvacord = require("canvacord");
const Levels = require("discord-xp");
const cleanRF = require(`./cleanRF`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
Levels.setURL(_𝔏𝔞𝔟_.VLKYREMDB);
var color = randomMC.getColor();
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const RankCheck = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ) => {
try {
const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
var աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
let ᴘɴᴀᴍᴇ;
try {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/\@s.whatsapp.net/g, "").replace(/\D/g, "");
require("child_process").exec("hash -r").stderr.pipe(process.stderr);
} catch {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/\D/g, "");
require("child_process").exec("hash -r").stderr.pipe(process.stderr);
}
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getProfilePicture(ʟɴᴀᴍᴇ);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}
var expFile = `./ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/${Date.now()}r${chat.key.id}.png`;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
const hasLeveledUp = await Levels.appendXp(
ʟɴᴀᴍᴇ,
ᴠʟᴋʏʀᴇ.chatId,
randomAmountOfXp
);
console.log(hasLeveledUp);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (hasLeveledUp) {
const user = await Levels.fetch(ʟɴᴀᴍᴇ, ᴠʟᴋʏʀᴇ.chatId, true);
const rank = new canvacord.Rank()
.setAvatar(𝕻𝕻𝖑𝖊𝖙𝖊𝖗)
.setCurrentXP(user.xp)
.setRequiredXP(Levels.xpFor(user.level + 1))
.setRank(user.position)
.setLevel(user.level)
.setStatus("online")
.setProgressBar(color, "COLOR")
.setUsername("Auto Ranker!")
.setDiscriminator(աɦօֆɛ);
rank.build().then(async (data) => {
fs.writeFile(expFile, data, async (error) => {
if (error) return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
{
contentText: `✨𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 @${ᴘɴᴀᴍᴇ}, _𝐋𝐞𝐯𝐞𝐥𝐞𝐝-𝐔𝐏!_`,
footerText: `×፝֟͜×𝐕𝐥𝐤𝐲𝐫𝐞${vers.vers}\nᴄᴏᴘʏʀɪɢʜᴛ Ⓒ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\nᴘʏᴛʜᴏɴ𓆘 + ☊ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ`,
buttons: [
{
buttonId: `${ᴋᴇɪ}rank`,
buttonText: { displayText: `${ᴋᴇɪ}rank` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
}
)
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return await cleanRF.cleanRF(expFile);
});
});
}
} catch (error) {
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
};
module.exports = {
MRC: RankCheck,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;

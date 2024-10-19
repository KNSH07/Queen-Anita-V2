//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "+33782241985";
global.owner = process.env.OWNER_NUMBER || "true";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkwrV2dYUzRGRGVleGtxdzdSTDI1cWNtZS9aMVRLN29ZSTRnNnVsWGkxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1UyMXk0MG9tU3BsU0FVMGkzdlpqV3NHaEk3QktpWkp5SWszVlVjUXFRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSTFPMTNJVFF1SWhYeU5DbzlGMjBIMnljL3VXVGxyczJPeGVlR0VtdWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVDVSN1VXYlFZNTNwblRVRHdvRVFNSkRzNnEwQTNtVHluSEdCSEtFem53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQZHpJLzQvQWRGQ2IvT3NwQ3UyL3I4WExRK2dkT00rTWVLNytnRlZJRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpIUEhmUXBacTlCcU1qaTF5RDdyU3JvUnJxMWZPU0IxRzBrWmpzZmN1eEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpVdExhWCtZK1hGUDZ3ZFFNQXJBZ2Z1bGpJSHpZT29TdnBIRmxZOU1raz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidExpVW1WU0Rta1FzWEJUVENaRVRhOFVOVkNaL3R2bnRMaHFSQ3BsamhnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNTa1pEaDNQdytZSm10SDY5dmY4UkVtNUpoZGxDdUZXeTB0ajEzVUpJbS82YTlaMUc5WTBJZm5UcmRyc1lvV0xCckpqNU5yZnp4SUJkNnF6OEVrNGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6ImdaMUt0WCt6dWM2WnU3NDEvejRMRDlIWjc0UlRNY1JHclNNMm04VlpPOWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTkwNDY4NDA4NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EwNjNENzBGNEQwQzk4NDU3QzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM2NDcxMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTkwNDY4NDA4NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0QjRCQTRBOEM3NzlEQjIxMTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM2NDcxNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic2FQQVFMNjdUUE9ETFcyWTVMNWNJZyIsInBob25lSWQiOiJjOGRhNDEzNS0xMDBmLTQ2N2EtOTFhMC02YjYyYjY3MjZiZTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJpNEVyZFNwQXkvK1VjSTJ3RlJPdVMxRUpzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGT3VKNDRqVkwvUWVuUng3bjN3ODUvSnllMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1NVhIQkg5WCIsIm1lIjp7ImlkIjoiMTkwNDY4NDA4NDM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS05TSF9ib3Rfa2lsbGVy4pig77iPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOamM0TU1ORU5tRjBMZ0dHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGRzVadjJmWEljTThkWm9vUi8wbk9ZczY2Mm5vNlNEcE9wK01UTEJOVTIwPSIsImFjY291bnRTaWduYXR1cmUiOiJQcjZxeWRCbFpLZi9USHB4dWkvRTNLWUFpVWp0S3RkS21Qc3JBU3hBWEpxTUwrSzRMY3RJYzhwNkZrY0hScm5aaEpUTlFzTXJPVlpFWmNYVHJOYS9CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiczlpbVY5RWJ4L3EyeXlCVlpyd1U4K0VYSGZ1T1N3RjJ3eWhvd21sQ3pBbkpicFJIYWZ0M2FVZEttUEhUb3NDY1B0Sm4yR2dmV3JabVpEQy84Rm5SaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTA0Njg0MDg0MzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUnVXYjluMXlIRFBIV2FLRWY5SnptTE91dHA2T2tnNlRxZmpFeXdUVk50In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzNjQ3MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHlLIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "KNSH Killer",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "true",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "true",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "true",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://Talkdrove.cc.nf/"  // put your app url here,
global.email ="qulzam378@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l" ; 



global.devs = "923072380380" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923072380380";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923072380380,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "all";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_20_03_26_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUZNVFRBOFVQbDZoWFVrcE1oNWRoN2M4UkhwMGkwQ3Fub1FyTk5UTGVIcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjJWZk9XU3dqTysxNU1JcWxVWFpFZTV2a05oT2hLUzhkNk1PbW8yZ1NPUXM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0loYWovMS9oVHdsb2dJVTZ6aU1sVksrSnlLUWIrR3NGNURPODBFY0Eyaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkRqaE80MGpGYmRlSXV6d2lVaDAvUXdTSEtQMC93aUFYYzBHVVhBYTJhbEE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0V5RnhsSU9wbE03dUpRcUMyYVE1bzl4Sk5CSis1b285TmpZb1BzTmdrST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjYwSCs0c2tPcDVDNmNUWFk4V0pmRnl6VjBncG9TN3hvbVB6ZlYyTXFaVmc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzTXVaY1Z1OGk4TjM5TWI2VmhjMDlSb1NpLzhXWkJ5dkNLdG15V2x1SjJ3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMWxSL1ZDaGFXQ1pheFV0RTZhRjlEdzdCZGM1NjA4eUtnK0VYOVFyeXd5RT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJb1lKNGZOY2lTdWliMGFWU2xDWHh3dXhPbmhZMTJHdVlDajhsMjN2Zm50aUpKSU13ZzRCSGM5UThNcWwyOHZmWU1IQ2RnemdCWmhiV0MvaEE4Vm5qZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MzEsXCJhZHZTZWNyZXRLZXlcIjpcImRvQkF1QU52aXVUNDFmblFKOTRUQVdoR1RySEd6UU96M0ttWTVQLzhZL3M9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMzNjc2Njg0NDJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQjVDRDE0RDdGQUQyNjgwMjg2NTk2MDM5NkY3Njk3NThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTQ0MTIwNH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMzNjc2Njg0NDJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRDEyNjc4NjEwRENBOEI2RTVDQkU4MjBFQUQwNUM3QzRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTQ0MTIwNH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkFBVGpWY0pfUlhTay1ydnZqZ0lwU1FcIixcInBob25lSWRcIjpcImQ2NDFiMjI4LTQ0NmItNDFjYy04NTA5LTIzMDk2ZDMyNjg1OVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWHAwajFVUVVuWjg3RXlQeE94aTk1eEdjakxjPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIktjOThxSEc3Sk5oaVBYdVBxa2wvVEY4QlU2MD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCIzQk5UQVJEUFwiLFwibWVcIjp7XCJpZFwiOlwiOTIzMzY3NjY4NDQyOjExQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIzNDA1NDM5Mzg0ODA2MjoxMUBsaWRcIixcIm5hbWVcIjpcIkhhZml6IE11aGFtbWFkIEFsaSDwn6WwXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNcnAxL2tGRUt5S2lyQUdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiUmZqM1lLVjFMRldUNUF3TVQrdHYwdFZhMWkxQXUrK0ZXbDRqSXhNY2hDZz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjZkQTZXTFhKMVgyTWRMWkplL1dXL0tXbGhsd0RBSjJRTG1OQVFrb1ZxWW5vdy9XcWpET3ZMWjJhamRuT1lWWWI1Uzhxb1VLOUp0UHFxSlRVMC9GNEJ3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiaThEdW1hNjUwQXhGeHJIUkxkcUkyOTVsNEFwSkwwc1haVCtZbC94R2RoRGI5TFg2L2pFSG5NZDluTWhZOFllSEU4TTlJUjlDVGs5Z01EcEMyRkhvaWc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkyMzM2NzY2ODQ0MjoxMUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJVWDQ5MkNsZFN4VmsrUU1ERS9yYjlMVld0WXRRTHZ2aFZwZUl5TVRISVFvXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTQ0MTIwMCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFFM1RcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFM1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTK1B6MTRTSWwvdW85S2FMOHYrUm5pVVEwNi9EMkJHL0F6Sm9PM1NLYkNBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTczNzE1OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTQ0MTIwMzI2NFwifSIKfQ===" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "POWERED BY Hamza" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Byte",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Byte",
  ownername:process.env.OWNER_NAME|| "Hamza",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

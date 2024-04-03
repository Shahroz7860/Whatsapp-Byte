const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://Talkdrove.cc.nf/"  // put your app url here,
global.email ="qulzam378@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l" ; 



global.devs = "923072380380" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923072380380,923453800380,923039981546,923157241836";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923072380380";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "all";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_03_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUdsT3ViTko4Tm53SHJqdFFnYUIxMHZWYTdncnhBUFRGb1RFeWlHVlJWdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkR2b1pOZzc5ZnhRMXpwRXhxMncyRE5YWER2eUlLOU9WZDhwV3lzWHdGQ2M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNE1QVkVSWW9Fa3M5M3QxRjRVZWltMjFzWHRDWlp3cE53KzJ5aXJqSnBXMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJvaHVMVGMzK1ZpdXk0RDBZSWVibllBWk4yUi9HOHJPeWtqWlg2eExzRFE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNE1tcmYzcnpiMy9WTVlzdldkc3lpSzdDUFQ2a2Rvczdpd1QxZ3lyNDAwUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFQWWJrbVpQK1FZcVRUbTJrakNZbTRWSW9nZ2J0d3FkSTc2UFZYbzRtV1U9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPREtzczlBY05Jam5LeExRTmN5MHpqQTJ5MVh5SHFJQ3F5eXp6ZDJwWFdBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUhMNitRWi9JTlZnZThkbDJvaGIyamQ0NEQxdDl2WFhxSkJuVEs3MURBYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwWWRWMi9vR0lkMkM0aVpGMWtsYk1Kbm1sSDZicnN0L2oyYWZPRnVVb3pSeVNUaTFtMG1LaEtKdFlkNkhodGxLZCtCMGcreHNybHRpdzBUd21ZaVZDZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYyLFwiYWR2U2VjcmV0S2V5XCI6XCJLMDFYQXlmeGdJK1F1Y0NYTDZsTlNLK2taV0NpSWVtV01BQ3AyNEp0cnQ0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwieDJhVFJLdWdUOE9TV2F5aFJZejNmUVwiLFwicGhvbmVJZFwiOlwiNzU4MzMwNmQtNWE5Ni00MWJiLTk3MGEtMWQ1ZTVhMjc4ZWU2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzMTFSUm5xZWRUeGcva2ZwVGI5bVNleGIxRWs9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRmJ1a0ZEUDF0bU0wMmE1eDB2RzRJeGZNTlM4PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlNaTkVNQUxaXCIsXCJtZVwiOntcImlkXCI6XCI5MjMwNzIzODAzODA6NDhAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIkhhbXphXCIsXCJsaWRcIjpcIjE1MzY2MTA3ODU0NDUxNTo0OEBsaWRcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ08rdjZlSUVFSkhja0xBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCI3ekloZzl3L1Z2ajhyOThSNUJMNDFWVDlaSkJPTUdXazlQeGQ5OThTUm5zPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiUjJtTHpyRnhXVUNXWU90cFdNZEpiV2MraTZDRHJ6SWFaOS94TzczUStkNFJ0RzlWMWJwUXhwQVU5RlpjV2VOMzR5SWs3aVRoVTZQMUlzNG91MGpkQ3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJmY200WU0zRmJ1V3hmeTRYTkNxR2p1UDVScVJhUEtQMzF0N0ZteHBGS0RzaVIxL0lWMGRFZ2QraGRLZisxR1cyckJCYnU1cDFEcHRGcmszUW1TTHZCdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMDcyMzgwMzgwOjQ4QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmU4eUlZUGNQMWI0L0svZkVlUVMrTlZVL1dTUVRqQmxwUFQ4WGZmZkVrWjdcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExNTQ5OTczLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUNnd1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNndy5qc29uIjogIntcImtleURhdGFcIjpcIldoR1JuWGpFd0NUTEMzSzJmL3ZhTXBBQi9JRWlOSUd2Y1poM0VnYldoUEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDk4OTE2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTU0ODk2MjQ0M1wifSIKfQ" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
global.isMongodb = true; 
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
 

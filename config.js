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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923072380380" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923072380380";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923072380380,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923072380380,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_38_03_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNk9MeXFFa3FJN1JnTEFVeGlOdENpZWVLSWlic3hNbnBDT0dNTXpsbGNGTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInk1dW5DbHFaNGJuT0dEazJBUW1oM004UFpJcWYyUnc4Rmt6aTRIRHEvV1E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0hwRDJQUGtyMHQwOCtEVkJKWHhheEhHVkcySHJoNUVwaGsrcG5IMitHQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVmYmw1eFFoWWladFJnd1dUaDEzV0xES2o1Q2xBeURTWmF0akJnRHV2Z2M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUVjbzVjdUNSM1Q5Wm5sWFVsVVRBVC9pcjhZSm16TE8zZXVEUmpPWDVYUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhWU1h0M2V2d09VTG9ha2c3ZzhJYUd6dmJkVUpGdnRSbER1NHRUNWtwa1E9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVQkVhSnQ1NnZ1T3hqcS9ianhlNkFzM0tMenZURGZ2RFhSV1Z3dHphMEdzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTmVqUC9HUFVseUo3N2VuZlFxRXJPNGFGSlQzMGFWT1RFUlU4VmlEUU1WST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtcVNHTU9uR1ZHQmlnU2VtV24ybDZTSzRnMHlzYTczaEo3TjFxU3ZQc2p1RzlMUXQya01yWHF6MlBtRGw5R3dsWDkvekhvN280WUZGOHZwV0F6UFJndz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAwLFwiYWR2U2VjcmV0S2V5XCI6XCJ2ZHZkQVV1dk9MMmF5eWI2akZNZmRDUlpaazJxQkNRbnByZlIxSTN5WjVzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwibEo5YlJzSFFSUzJrUVdhcVZ5cnRQUVwiLFwicGhvbmVJZFwiOlwiYmJmOTI1ZTAtMzI4MS00ODFiLWIwMWItN2MxNmE5YzhiZTliXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRcEkxNDdKRUZGR0s2KzJ4UStIVTVBOXVtUjQ9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNlowNndhdGxpejVIdXd4cTA3MFR6WE1ZN2FrPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIjMxWllITTFGXCIsXCJtZVwiOntcImlkXCI6XCI5MjMwNzIzODAzODA6MzhAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTUzNjYxMDc4NTQ0NTE1OjM4QGxpZFwiLFwibmFtZVwiOlwiOyApXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNKaitqNllCRU1IZDFxOEdHQTBnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiaE1LWDNUMDB3VGxVL2RsY0VybytMc2dVdG1vSURzT3V3VUM4d29BdDRtMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInpqNUIvTS9BL1NVSnVsN2hsVUYyMTgxQWpYV1lHbHBWZTV0ZjFYamQ0QVVseXQ4OUhHdkx2NmNDL05xTGxQdlBYT3ZCQnhGTWcyUEdscVRPUGhydkRBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiUGxoNE1Yd0JNUkoyTm04YWs0eG8xeGNzYWZEbGxYa2wxS21PWEI1VTkrNXQ5RTVmelpaZWVSWlM4S201VWJucmlqQXVhTEd5a1Z6L1g0ODByTDUrZ0E9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkyMzA3MjM4MDM4MDozOEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJZVENsOTA5Tk1FNVZQM1pYQks2UGk3SUZMWnFDQTdEcnNGQXZNS0FMZUp0XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDU5OTg3NixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFFQ01cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFQ00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0NTlSQnozVS9yci9VdkFzRVdUcWNvbmlqWm9EbGRrZkVPaFJFclRtZkFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0ODM4OTE0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEwMTM3OTM0NDI0XCJ9Igp9git" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "POWERED BY Hamza" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Byte",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Byte",
  ownername:process.env.OWNER_NAME|| "Byte",


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
 

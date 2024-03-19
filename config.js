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
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923072380380,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923072380380,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_08_03_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZU9yRGdqTmZQdys4cW8rcFVNSTRaWHN0UVFoR2JzL0dEeVVDL1pMR2xFOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInI4VFF6cXErdnIvMktDbFlPcThmd05uY0RrSEtqc0dvUk1IYThsVnpmMDQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0tXRVpSQitBaDBLV1FSOUJLbjFaaENUVS8vOU02Z1NYWVpibXNmYVMxdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVkdmY2S1ZscXBxR1NmQ09Fd3lTTnVXNmYyb3ZMR0hJVlJLdUtLb0JXa0E9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0lnN3B0bVVheXF3Z0Z2YUJ5QXJEVlNsdVpWZllNWTkwM29aN3hyZEwzOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInA3YUJ4YnptYVUrUVlCckxUMC80VUZtSHhuQWNtYkx0THNoeHUyS2o2MjA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLQThYVGllK1RXNFF0Qk4xS3NpRGF1OGNBbHVvc0xNZUFpUjVJbGlCQUdRPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieXNqY1MxWGxKYzg1SWlhTHBscURxc2NneGt4czVZR0tRZ2pvNGw5MXJtOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtV1Q0U2lNWWNXYmxVbTBOaG9EbjE5cUtaOUZOdzMzMjYwam51WmswVXFIVXMvaDdORVExNjRsSmZGTFlmUUdjckZiZ1RwenhlcnUxMGRtTHhKZmtpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTgsXCJhZHZTZWNyZXRLZXlcIjpcImF4d2lpc2FrbzBYNXpOSmU5aEY0Uk1YZlQvdHpQQmtERzJsb1hTRkZDRkE9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNUY0QUY4OTk4RTUzQzgxQzEzQkY4MEMxMDc5OUExNDBcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDgxMDQ3N30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQUJBNzY1RENBQkNEOUY0QjY2QkY2NkI5RDU3N0VCNjBcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDgxMDQ3OH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImNyTE8yZnFrVFJDUXdueFo2dDBCV0FcIixcInBob25lSWRcIjpcImI4ZTFmN2JjLTc3MDYtNGE3NS04YzE4LTk1NzJjMGVkMWVmZFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ1pIMEVORHZ6TjRzbEk4bGNoQmEyRlE0eUNFPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlYvZUlmaW04QVhsVmFRTG54TGw5Q3JQWWxVZz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJNMUQ3SFMyV1wiLFwibWVcIjp7XCJpZFwiOlwiOTIzMDcyMzgwMzgwOjQwQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE1MzY2MTA3ODU0NDUxNTo0MEBsaWRcIixcIm5hbWVcIjpcIjsgKVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSmorajZZQkVPUEs0NjhHR0E4Z0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImhNS1gzVDAwd1RsVS9kbGNFcm8rTHNnVXRtb0lEc091d1VDOHdvQXQ0bTA9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJvRnRyTHFuOUdTWTNmY21tWVpBL2dwRWN6cUJNc2lSaEF5Ym16ZVBlbEtEdUdWY3IrUWNQOExQeW1hcjVYOGJaNTMyaTk4NVh3bWN1S0tZS0JqWmdDZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInd3OVE3RVhNMCtGV3BFbkg2UWNBdEtScStNN0txUXIyZlZtOC9nTS94N2lVR0tpa2RIc0tKZkV3Q2VXS0h4M1BOK3ZyaU44NDB2Q3hTMTRQUDJ2NWpRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMwNzIzODAzODA6NDBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWVRDbDkwOU5NRTVWUDNaWEJLNlBpN0lGTFpxQ0E3RHJzRkF2TUtBTGVKdFwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTA4MTA0NzEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRUNNXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUNNLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDU5UkJ6M1UvcnIvVXZBc0VXVHFjb25palpvRGxka2ZFT2hSRXJUbWZBWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDgzODkxNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDEzNzkzNDQyNFwifSIKfQ==" ;


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
 

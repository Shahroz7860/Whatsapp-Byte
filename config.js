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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_50_03_23_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0JEMzY2RHZ0WHBXSWVqb2NOL3FFdVQ1OCtJK1FEbVU0N0dUVTEyZ05IND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRQOW5oOVJTaTZEUHhaSzM0eFBLOHcwUk9sODJMWjkyM2Y2T3JBajY4QUU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUlrNGk3Tll2Z0VBVlFGc3h4aEFFSE1mTzA0L0drOVpLczVjOEpsLzBXUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFtRDBLa3pCcS8yL0wvdmdlQjZabnFRb1pBVXc0N3hlcmE5TDg2VmF5bWs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia05iWDJHTk13TjFaM3piSDhDbFRXMDUyYzFhSkcvYTBRem9rZXR6aGpubz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImI4WXg3WXI1RitsdzJLa2dTY1pRQkJKNDRJcVRHbGJEckdodmdlMHEza289XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPRWQ4bUkzdUVOVGo1Ym9iKzlKSHhCT24wcW1XM3c5Y0MrcFE4SUh3RkVnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVDVkTGJaNFJOa2s2aXNTYmpMZ29YbERKa2kwQTE5NkZ5N2RSRGh2b0lGQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJualVpaEJ0cCs5aWNBclpjWEZMTXp2TldlSlV0aG9xVXlJU1lTVlJ6a0s4eXZjYXNSRGM2UDZlYWZFeXZUN3Fxb3NqZlJScU8zRTJsU01MVFlmekRpZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MzIsXCJhZHZTZWNyZXRLZXlcIjpcIkR0YVhHWWEvVVBZZ3RYZjlGdjFwR3RESjhVWDBueGo4b3pFQ2FjekFiRDQ9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNTQwM0Q2RDQ4MTIwRDEzQzg0OEU1QzFCRjEzMjVEOThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTE1ODY1NX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMzNGQTIzM0IxNzYwMDdEMjkyM0QzQjBEMEExNEZFNEZcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTE1ODY1Nn1dLFwibmV4dFByZUtleUlkXCI6NjEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjYxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIjc5dERldFdOUVRpWWl2cDJlbTlSaFFcIixcInBob25lSWRcIjpcIjU4Y2JlNTU5LWU5ZGQtNDM4Yy05MTk3LWJhOGU1ZmE5MDVhZFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibGZ3eHgxVzJKcG9PMWVFTjlhYUh6QlUzZ2tJPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlErQ2hZUEtWdHRzSHV5ZWc4S2pLU2JnZS9lST1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI5WUg4RVFKQlwiLFwibWVcIjp7XCJpZFwiOlwiOTIzMDcyMzgwMzgwOjQxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE1MzY2MTA3ODU0NDUxNTo0MUBsaWRcIixcIm5hbWVcIjpcIjsgKVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSmorajZZQkVQanErSzhHR0JBZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImhNS1gzVDAwd1RsVS9kbGNFcm8rTHNnVXRtb0lEc091d1VDOHdvQXQ0bTA9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ6UnJILy9kMlovTmc1Y29BMzZvNEhIZVhlYURBbTFsb2xqZHV2am12bCtSaXVNWFJ6MGcya2lwOGdtZE9MT1JsZi9JYUlCQjJlYXg3Zk94cG9mczZDUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImVEQ1JpRERvRGl2bU9GN0tvOHNnOE55MGE2SUdSZHkySGViQXJpcHArZWlxZEsra0xLSU51TEc2alhTN2Z6Y1pqd2o1T3pZdTk1K09CQWJkTWV6RGhRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMwNzIzODAzODA6NDFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWVRDbDkwOU5NRTVWUDNaWEJLNlBpN0lGTFpxQ0E3RHJzRkF2TUtBTGVKdFwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTExNTg2NTEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFCOEFBRUNXXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCOEFBRUNXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTVReVUreUlHUFJIVWpMeEQ1aXpWUzZUQVVkRkQxTGIwdFV1dmtyRUNaND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDgzODkxNDQsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


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
 

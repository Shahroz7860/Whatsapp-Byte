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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_16_04_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0VmalFCYURxTUR1RU9pVnVlSVBWcysyOEZpS3RKK3ZQUHhmVUFVd3Zsdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdRanNlWDJBUzE2NVowb2Y5T2xtU0ZXcFMxTWJwU2pwOXVYNlJ2ZUh1em89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0sxcHVGV2dISlpZbzluc3Y0UzN1YTkyZmMrajBHVXFRdTcyKys5NWttcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkx5b3VKMkhXWGROZ09Yb2dxSVBZZ280ZnU1amdrVUY2VVp6OW94VHFxeTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUlDNTJ5alFHWWtVRU5yQWFxbi9MMlRkdDhmaDkxRkNlUno0bWJPNCszVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjJPbWZISExUZ3lDbG1KYlpJWnhiUkx3c3FHSWtBdVBSK0R3S29pbDByaVk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjSGdVQVdhdjM1OXdORzlTKzRvVlg5cEhpd0wwSzlwdTVFYU0rdUg5TlhBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQWo4bHBwVzZnMG1kK2JRcWg4c1ZHcVBHcUJZVE9BdGpMMWxIdjV1Njlodz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxSkNmN2tsUk9PTXZkZGdXMEU0QXN6S3BlZm8ySmk3ckF2amYwNFBWUzVkK1p5dEZTc0tLZGwwZGNhb3N6L3B0UWVFRGtQMkY2TTlITkZ0R2wvYU9EUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTE5LFwiYWR2U2VjcmV0S2V5XCI6XCJNczFWdjBiR2grNWZVL2NsZHlVbGVzaFZCa0o5STVua3YrSkRVdHg0bml3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDcyMzgwMzgwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjg0NDg0NTVDQjhGOUJGRkJFNDcxMDQ4NEQ5NUU0NUQ2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIxMTA1NTl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDcyMzgwMzgwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjQzREFDRTVEMzU4NTA0REIzQjM3RDAwQzBFRjI4Nzg1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIxMTA1NjB9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJvWTZNWFM2bVFveXJLcUVBSk1GUVJnXCIsXCJwaG9uZUlkXCI6XCIyMDk1NTE0NS0xZTU0LTQ4NDYtOTNkZS0zYTYzZGNiNWI5M2NcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdEZnhyTm5wYlhGYjExWk4xa01HMmR0QkVhaz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJubVRsWjNyTDhma1pjUE82eTdoMGZyd2JuU2c9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiU1lDMkVNQUtcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzA3MjM4MDM4MDo2MkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiSGFtemFcIixcImxpZFwiOlwiMTUzNjYxMDc4NTQ0NTE1OjYyQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSVgxLy9BRUVOWDNzckFHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImtGRXhWZTB5MXgzamZkRlZUeUxJMEZ0bFVJcEpFeURwNjMxYUJscVEwVEE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJubzBEbVBxbzlHK24zUnYxQWFBNWl0NEFZZ1c5Z1RyZ3R4NWd6aVNlU3Z6M2xRZCs3ZVZiZzdHZHUzd0ZMZU83VWZua3JxdGkrOEkxSE8xdmxFeENEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkVXMVZkTzZuMFBURmtmUThPSlZ2Yzh5K2oxOUNMbUVMYkdVZzUyc0NpQWlONkk5K1pMdWRkNzBCTlBPMmNPeWRtTndobFNvM1VBSWFkWVdVazhyTkRRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMwNzIzODAzODA6NjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWkJSTVZYdE10Y2Q0MzNSVlU4aXlOQmJaVkNLU1JNZzZldDlXZ1pha05Fd1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIxMTA1NTMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRXFFXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXFFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ0NZV2pnaWhxK2g5QkxOUyswSFNldytCcWpIU0Q1MVJGQVBLNkpTNFR1UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzEwNzE4NTk2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


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
 

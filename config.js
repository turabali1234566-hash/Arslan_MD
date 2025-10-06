const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tMMXJyVTRLSVVaemxOaGlzck8yRTd0TzJWc0tOZ3pTK2dQSFZFMjcwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTF5dGVuK2F0TjRWZ0tBblRub2dyWUNXV0JSLy9HK2JQNmcwRkE0UUxSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ2VHZmwrWDZidjNQMldOVXZ4aFZlbXBaanNvaE9BUUFLYU9rY3dUNDNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSXVhNWl6a1M5b2pOSjVGOXBqMmdtaU5lVW56emZqT3hzRkdIbldPT21rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOS01tWitYaElRdWZKdzVzMWJ2TG4wbXZoNnBwc25MRWF1dWNaUjRwbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNQVRtZ0xpeVJVb0lTQWNLN0ViQjBvd2VKd0kxQkVBL1F3dmtCTm13V3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZHV3FQdHI1Sm5NZUhvQ1M0dzFlcmI3TmsrTklLWU54ck1UOVJBYWUxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2xSbW5iZ010Nkt2eHNuSWkrVFJ1U01iemVMMmRPSFovSytwSjMzd3dVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYwRGdLN3lJT0l4TExDZEkrQjhISW4wVVBySk5nd3FrK0hWYTdYOGRHR3dLaTNwZ0RpQXlmaVo1RHUzUWxYQnhXZ0lUK1JnaFBNNjMwRkVVM3I5MmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJrbkxoOWhJUi91T3Ewd1QvV0tDRTdkSlB6VSt3d1RTUW10SlFDc3pvc2IwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1OTg5NTkyRTQxN0ZDMTk0QjZBQURBNzE3ODBCMzU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjAwNDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTlBNkU2N0YyODkyRTM1Mzg3MDM0RDk4NzAyNDY2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjAwNDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QTI3MDQyMDNCM0I0RjVCMThERTQzMzdCMTdFNjNEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjAwNDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ikc1TTFZSkwzIiwibWUiOnsiaWQiOiIzODY2NTcwMTYyOTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNyeXN0YWwgU2VyZW5hIiwibGlkIjoiNTMxNzgwNzEwMDA2NDo1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0dieTRFQ0VPamtqTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoielFub1pCVHJjRFN2MDdJQWphUTAzUFBQam5IN0RKM2hMb2V0MUZPWG1YYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaVg2RzA5THJ4Q0dQa1hmNWdKOE1GdUdyb3RrbjF4ZlUzenFiZWI2aE45d1p2ZXE1SkphSEhhL1RHVXhDN1JhQTFMQ2pYbW9YMFBkYVFDQUI4emRvQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZDczNNemFURy9yMTI4eFk4Y29kZ08wT2N5VnZkOWI5UUVic0NOWkMvQW5QR1RCYWNYMEFiNmMzNFM3bGVMeDdWbnU2L2ttbW1kdmxHSTJhcWM0WmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzg2NjU3MDE2Mjk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMEo2R1FVNjNBMHI5T3lBSTJrTk56eno0NXgrd3lkNFM2SHJkUlRsNWwzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk3MjAwNDMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWnkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

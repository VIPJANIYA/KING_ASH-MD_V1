const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",   // මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/MVC6R4P/IMG-20241103-WA0256.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 𝗛𝗲𝗹𝗹𝗼, 𝐈 𝗮𝗺 🤖 𝗔𝗦𝗛-𝗠𝗗-𝗩➊💗 𝐈 𝗔𝗠 𝗔𝗹𝗶𝘃𝗲 𝗡𝗼𝘄 🌟",  
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",   
};

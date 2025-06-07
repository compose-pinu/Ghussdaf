const axios = require('axios');

module.exports.config = {
  name: "fbcover",
  version: "1.0.0",
  role: 0,
  author: "SK-SIDDIK-KHAN",
  description: "Facebook cover",
  category: "cover",
  guide: {
    en: "name - subname - address - email - phone - color (default: white)",
  },
  coolDowns: 5,
};

module.exports.onStart = async function ({ api, event, args }) {
  const input = args.join(" ");
  let id;

  if (event.type === "message_reply") {
    id = event.messageReply.senderID;
  } else {
    id = Object.keys(event.mentions)[0] || event.senderID;
  }

  if (!input) {
    return api.sendMessage(
      `❌| Wrong\nTry ${global.GoatBot.config.prefix}fbcover name - title - address - email - phone - color (default = white)`,
      event.threadID,
      event.messageID
    );
  }

  const msg = input.split("-");
  const name = msg[0]?.trim();
  const subname = msg[1]?.trim();
  const address = msg[2]?.trim();
  const email = msg[3]?.trim();
  const phone = msg[4]?.trim();
  const color = msg[5]?.trim() || "white";

  if (!name || !subname || !address || !email || !phone) {
    return api.sendMessage(
      `❌ Please provide name, subname, address, email, phone, and color ✅`,
      event.threadID,
      event.messageID
    );
  }

  api.sendMessage(
    "𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭.⏰",
    event.threadID,
    (err, info) =>
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 4000)
  );

  try {
    const apiUrl = 'https://fbcover-apis.onrender.com/fbcover';
    const url = `${apiUrl}?name=${encodeURIComponent(name)}&subname=${encodeURIComponent(subname)}&address=${encodeURIComponent(address)}&email=${encodeURIComponent(email)}&sdt=${encodeURIComponent(phone)}&color=${encodeURIComponent(color)}&uid=${id}`;

    const response = await axios.get(url, { responseType: "stream" });

    api.sendMessage(
      {
        body: `‎✿━━━━━━━━━━━━━━━━━━✿\n🔵𝗙𝗜𝗥𝗦𝗧 𝗡𝗔𝗠𝗘: ${name}\n⚫𝗦𝗘𝗖𝗢𝗡𝗗 𝗡𝗔𝗠𝗘: ${subname}\n⚪𝗔𝗗𝗗𝗥𝗘𝗦𝗦: ${address}\n📫𝗠𝗔𝗜𝗟: ${email}\n☎️𝗣𝗛𝗢𝗡𝗘 𝗡𝗢: ${phone}\n🎇𝗖𝗢𝗟𝗢𝗥: ${color}\n✿━━━━━━━━━━━━━━━━━━✿`,
        attachment: response.data,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {
    console.error("Error generating FB cover:", error.message);
    api.sendMessage(
      "❌ An Error Occurred While Generating the Fb Cover",
      event.threadID
    );
  }
};

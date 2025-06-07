module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto",
  },

  onStart: async function ({ event, message, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const currentDate = new Date();

    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = currentDate.toLocaleDateString("en-US", options);

    const time = currentDate.toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
      hour12: true,
    });

    const img = `https://graph.facebook.com/100059026788061/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

    const msg = `╭────────────────⊙\n├─☾ 𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄 𝚆𝙰𝙻𝙰𝙸𝙺𝚄𝙼 \n├─☾ 𝙰𝙳𝙼𝙸𝙽 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽\n├─☾ 𝙽𝙰𝙼𝙴𝚂 : 𝚂𝙺 𝚂𝙸𝙳𝙳𝙸𝙺 𝙺𝙷𝙰𝙽\n├─☾ 𝙰𝙳𝙳𝚁𝙴𝚂𝚂 : 𝚁𝙰𝙹𝚂𝙷𝙰𝙷𝙸\n├─☾ 𝙲𝙾𝙽𝚃𝙰𝙲𝚃\n├─☾ 𝙵𝙱 : 𝚃𝙰𝙽𝙹𝙸𝙳 𝙷𝙰𝚂𝙰𝙽 𝚃𝙰𝙼𝙸𝙼\n├─☾ 𝚃𝙶 : t.me/rdxprem12\n├─☾ 𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 : [ / ]\n├─☾ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : 𝚂𝙺_𝚂𝙸𝙳𝙳𝙸𝙺_𝟶𝟽\n├─☾ 𝚃𝙸𝙼𝙴𝚂 : ${time} \n├─☾ 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶\n╰────────────────⊙`;

    message.reply({
      body: msg,
      attachment: await global.utils.getStreamFromURL(img),
    });
  },
};
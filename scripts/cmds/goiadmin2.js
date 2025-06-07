module.exports = {
  config: {
    name: "goiadmin2",
    author: "SK-SIDDIK-KHAN",
    role: 0,
    shortDescription: "Responds when someone mentions the bot owner",
    longDescription: "",
    category: "awto",
    guide: "{pn}"
  },

  onChat: function ({ api, event }) {
    const ownerID = "100059026788061";

    if (event.senderID !== ownerID) {
      if (event.mentions && Object.keys(event.mentions).includes(ownerID)) {
        const messages = [
          "Don't Mention My Owner, Busy Right Now💞",
          "আমার বস চিপায় বিজি আছে___🌝",
          "মেয়ে পটাতে গেছে___😁",
          "এমন ভাবে মেনশান না দিয়ে একটা জি এফ দাও__🙈",
          "এত ডাকিস কেন__😡\n আমার বস অনেক বিজি__☺️",
          "বস কই তুমি\nতোমারে এক বলদে খোজ করে__🤣"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        return api.sendMessage(randomMessage, event.threadID, event.messageID);
      }
    }
  },

  onStart: async function () {}
};
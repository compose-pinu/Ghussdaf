module.exports = {
  config: {
    name: "speed",
    aliases: ["running"],
    author: "SK-SIDDIK-KHAN",
    version: 1.1,
    role: 0,
    shortDescription: {
      en: "Displays run of the bot's system."
    },
    longDescription: {
      en: "Displays Running speed of the bot's system."
    },
    category: "system",
    guide: {
      en: "Use {up} uptime to check the current Running speed of the bot's system."
    }
  },
  onStart: async function ({ api, event, args }) {
    const timeStart = Date.now();
    await api.sendMessage("CHECKING SPEED 💔", event.threadID);
    const uptime = Date.now() - timeStart;
    const randomUptime = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    const showRealRun = Math.random() <= 0.2;
    const finalRunning = showRealRun ? uptime : randomUptime;

    api.sendMessage(`Running speed 🐎 ${finalRunning} MS.`, event.threadID);
  },
  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "uptimespeed") {
      const uptimeValue = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
      return message.reply(`Running ${uptimeValue} days`);
    }
  }
};

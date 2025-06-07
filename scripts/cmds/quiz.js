const { GoatWrapper } = require("fca-liane-utils");
const axios = require("axios");

module.exports = {
  config: {
    name: "quiz",
    aliases: ["qz"],
    version: "2.0.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 0,
    role: 0,
    category: "game",
  },

  onStart: async function ({ api, event, usersData }) {
    try {
      const res = await axios.get(`https://quiz-api-sv55.onrender.com/quiz?category=bangla`);
      const quizData = res.data.question;
      const { question, correctAnswer, options } = quizData;
      const { a, b, c, d } = options;
      const namePlayerReact = await usersData.getName(event.senderID);

      const quizMsg = {
        body: `\n╭──✦ ${question}\n├‣ 𝗔) ${a}\n├‣ 𝗕) ${b}\n├‣ 𝗖) ${c}\n├‣ 𝗗) ${d}\n╰──────────────────‣\n✦𝚁𝚎𝚙𝚕𝚢 𝚠𝚒𝚝𝚑 𝗔, 𝗕, 𝗖 or 𝗗 to answer.`,
      };

      const timeout = 30; 

      api.sendMessage(
        quizMsg,
        event.threadID,
        (error, info) => {
          if (error) return console.error("❌ | Send error", error);
          global.GoatBot.onReply.set(info.messageID, {
            type: "reply",
            commandName: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            dataGame: quizData,
            correctAnswer,
            nameUser: namePlayerReact,
            attempts: 0
          });

          setTimeout(() => {
            api.unsendMessage(info.messageID);
          }, timeout * 1000);
        },
        event.messageID
      );
    } catch (error) {
      console.error("❌ | Error occurred", error);
      api.sendMessage(error.message, event.threadID, event.messageID);
    }
  },

  onReply: async ({ event, api, Reply, usersData }) => {
    const { correctAnswer, nameUser, author } = Reply;
    if (event.senderID !== author)
      return api.sendMessage(
        "Who are you 🐸",
        event.threadID,
        event.messageID
      );

    const maxAttempts = 2;

    if (Reply.type === "reply") {
      const userReply = event.body.toLowerCase();

      if (Reply.attempts >= maxAttempts) {
        await api.unsendMessage(Reply.messageID);
        return api.sendMessage(
          `🚫 | ${nameUser}, you have reached the maximum number of attempts (2).\nThe correct answer is: ${correctAnswer}`,
          event.threadID,
          event.messageID
        );
      }

      if (userReply === correctAnswer.toLowerCase()) {
        await api.unsendMessage(Reply.messageID);
        const rewardCoins = 300;
        const rewardExp = 100;
        const userData = await usersData.get(author);

        await usersData.set(author, {
          money: userData.money + rewardCoins,
          exp: userData.exp + rewardExp,
          data: userData.data,
        });

        return api.sendMessage(
          `Congratulations ${nameUser} 🌟🎉\n\nYou're a Quiz Champion🏆\nYou've earned ${rewardCoins} Coins 💰 and ${rewardExp} EXP 🌟\n\nKeep up the great work 🚀`,
          event.threadID,
          event.messageID
        );
      } else {
        Reply.attempts += 1;
        global.GoatBot.onReply.set(Reply.messageID, Reply);
        return api.sendMessage(
          `❌ | Wrong Answer. You have ${maxAttempts - Reply.attempts} attempts left.\n✅ | Try Again`,
          event.threadID,
          event.messageID
        );
      }
    }
  },
};
const wrapper = new GoatWrapper(module.exports); wrapper.applyNoPrefix({ allowPrefix: true });
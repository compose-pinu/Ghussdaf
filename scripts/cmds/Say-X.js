const { GoatWrapper } = require("fca-liane-utils");
const axios = require('axios');

module.exports = {
        config: {
                name: "x",
                aliases: ["sbn", "banglasay"],
                version: "1.0",
                author: "SK-SIDDIK-KHAN",
                countDown: 5,
                role: 0,
                shortDescription: "Say something Bangla will say it clearly",
                longDescription: "female vs Voice",
                category: "media",
                guide: "{pn} {{<say>}}"
        },

        onStart: async function ({ api, message, args, event}) {
    let lng = "bn"
    let say;
                if (lng.includes(args[0])) {
      lng = args[0]
      args.shift()
      say = encodeURIComponent(args.join(" "))
    } else { 
      say = args.join(" ")
    }
        const extractText = () => {
        if (type === "message_reply") {
          return event.messageReply.body;
        } else if (mentions.length > 0) {
          return mentions[0].body;
        } else {
          return chat;
        }
      }
                        try {
                                let url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lng}&client=tw-ob&q=${say}`


        message.reply({body:"",
                                attachment: await global.utils.getStreamFromURL(url)
                      })


                        } catch (e) {
        console.log(e)
        message.reply(`𝐏𝐥𝐞𝐚𝐬𝐞 𝐈𝐧𝐭𝐞𝐫 𝐀 𝐌𝐚𝐬𝐬𝐚𝐠𝐞 ✅`) }

        }
};
const wrapper = new GoatWrapper(module.exports); wrapper.applyNoPrefix({ allowPrefix: true });

module.exports = {
	config: {
		name: "proposed",
		version: "1.0",
		author:"SK-SIDDIK-KHAN",
		role: 2,
		category: "user",
    shortDescription: "nothing",
		longDescription: "",
		guide: {
			vi: "Not Available",
			en: "{p} chik"
		} 
	},
  
  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি যাকে প্রোপস করতে চান তাকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("এসকে সিদ্দিক এর ভালোবাসা নেউ🖤🥀");
setTimeout(() => {a({body: "শুনো প্রিয় খুব ভালো বাসি তোমায় 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "তোমার সাথে একবার কথা না বল্লে আমার মনটা কেমন জানি করে☺️" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তুমি আমায় কি করলে তোমাকে ছাড়া আমি কিছু বুঝিনা কেন এই মন শুধু খোঁজে তোমাকে সারাক্ষণ😒" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "‎তোমার চিন্তা আমার মন থেকে কখনই যাবে না 🙂\n\কারণ তুমি আমার চিন্তার চিন্তায় মিশে আছো💚 " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "স্বর্গ আমি চাই না কারণ আমি তোমাকে পেয়েছি\n\nস্বপ্ন আমি দেখতে চাই না কারণ তুমিই আমার স্বপ্ন🥀🥰💚 " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "যখন থেকে পরী হয়ে বাসা বেধেঁছ আমার চোখে,\n\n তখন থেকে তুমি ছাড়া আর কিছুই ভালো লাগেনা❤️ " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "জান তুমি এত সুন্দর কেন আমি যে তোমায় না দেখে থাকতে পারি না😻🥰💚 " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "‎তোমাকে দেখলে আমার এত ভালো লাগে কেন জান আমি কিছুই তো বুঝতে পারি না💚 " + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "‎তোমার অই মায়াবি কন্ঠ শুনলে আমার মন ভালো হয়ে যায়💚 " + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "টমেটো লাল কাঁচা মরিচ ঝাল তোমার বুকের মাঝে চুমু দেবো আমি চিরকাল জান🙈🥀🥰 " + " " + name, mentions: arraytag})},26000);
setTimeout(() => {a({body: "যদি তুমি মনে করো সুখে নেই তবে তুমি ফিরে আসো আমার বুকে এখনো আগ্লে রাখবো তোমাকে!!💚 ।" + " " + name, mentions: arraytag})}, 29000);
setTimeout(() => {a({body: "তোমাকে সব সময় পাশে চাই হয় এপারে না হয় ওপারে ⚜— -!!-।" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "༉༎༉😽!!লাইন টা তুমার জন্য  ডুবেছি আমি তুমার প্রেমের অনন্ত মায়ায় 🙈 ༅༎•❤️🌸" + " " + name, mentions: arraytag})},44000);
setTimeout(() => {a({body: "দিন শেষে আমার তোমাকেই লাগবে😽" + " " + name, mentions: arraytag})}, 47000);
setTimeout(() => {a("~🖤এক আকাশ সমান স্বপ্ন নিয়েতোমাকে ভালোবাসি প্রিয়🐰🦋🥰")}, 39000);
setTimeout(() =>{a("লাস্ট এতোটুকই বলবো থাক বেশি হইয়া গেছে")}, 50000);
    
  }
  };
  

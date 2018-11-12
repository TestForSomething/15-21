const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '505286693532729345') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [  :hearts:️:paperclips:.
  :heart_eyes: :heart: 
  ودي اعزمك على سيرفري , اذا ممكن تلبي الدعوة ي بعد قلبي ؟  :musical_score::sparkles:
                                 [https://discord.gg/8PkMhsT ] ``]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login("NDg4NDQ5OTMwODg1ODU3MzEw.Dss-GQ.u4JPH6NO72fxRMSqhH3j5OPIrT8");

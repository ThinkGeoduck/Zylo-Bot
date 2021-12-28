const db = require("quick.db");
const Discord =  require("discord.js");

module.exports = {
  config: {
    name: "setwelcomechannel",
    category: "moderation",
    aliases: ["enablewelcomechannel", "swc", "ewc", 'sw', 'ew'],
    description: "Sets A Channel Where The Bot Can Welcome Users!",
    usage: "[channel mention | channel ID | channel name]",
    accessableby: "Administrators"
  },
 
  run: async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | **You Cannot Use This Command!**")
  let channel = message.mentions.channels.first()
  if (!channel) return message.channel.send(":x: | **mention The channel**")
  db.set(`joinChannel_${message.guild.id}`, channel.id)
  let embed = new Discord.MessageEmbed()
  .setTitle("Welcome channel Set!")
  .setDescription("The welcome channel has Been set")
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL())
  .setThumbnail(message.guild.iconURL())
  .setColor("#cff772")
  .addField("Channel", channel.toString())
  message.channel.send({embed:embed})
}
}
  
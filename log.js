 const channels = require(`./ids/channels.json`);
 const Discord = require("discord.js");

 /**
 * Muestra un mensaje con datos del usuario en el canal de logs
 * 
 * @author Ángela López (Ainiall)
 */
 module.exports = (client, member, msg, color)=>{
    const log = client.channels.cache.get(channels.logs["logs-mensajes"]);

    const msgEmbed = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.avatarURL())
      .setDescription(msg)
      .setColor(color)
      .setTimestamp()
      .setFooter("ID: " + member.user.id);
  
    log.send({ embeds: [msgEmbed] });
 };
 
 const channels = require(`./ids/channels.json`);
 const Discord = require("discord.js");

 /**
 * Muestra un mensaje con datos del usuario en el canal de logs
 * 
 * @author Ángela López (Ainiall)
 */
 module.exports = (client, user, msg, color, footer)=>{
    const log = client.channels.cache.get(channels.logs["logs-mensajes"]);

    const msgEmbed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL())
      .setDescription(msg)
      .setColor(color)
      .setTimestamp()
      .setFooter(footer);
  
    log.send({ embeds: [msgEmbed] });
 };
 
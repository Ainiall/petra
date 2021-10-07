const channels = require(`./ids/channels.json`);
const Discord = require("discord.js");

/**
 * Muestra un mensaje con datos del usuario en el canal de logs
 *
 * @author Ángela López (Ainiall)
 */
module.exports = (channel, user, msg, color, footer) => {
  const msgEmbed = new Discord.MessageEmbed()
    .setAuthor(user.username, user.avatarURL())
    .setDescription(msg)
    .setColor(color)
    .setTimestamp()
    .setFooter(footer);

  channel.send({ embeds: [msgEmbed] });
};

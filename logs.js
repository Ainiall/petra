const channels = require(`./ids/channels.json`);
const Discord = require(`discord.js`);
/**
 * Muestra un mensaje con datos del usuario en el canal de logs
 *
 * @author Ángela López (Ainiall)
 */

module.exports = {
  log: function (user, msg, color, footer, channel = null) {
    const msgEmbed = new Discord.MessageEmbed()
      .setAuthor(user.username, user.avatarURL())
      .setDescription(msg)
      .setColor(color)
      .setTimestamp()
      .setFooter(footer);
    (channel !== null //TODO esto es una cerdada
      ? channel
      : user.client.channels.cache.get(channels.logs[`logs-mensajes`])
    ).send({ embeds: [msgEmbed] });
  },
  simpleLog: function (user, msg, color) {
    const url = user.displayAvatarURL({ dynamic: true, size: 64 });
    const msgEmbed = new Discord.MessageEmbed()
      .setFooter(user.username + msg, url)
      .setColor(color)
      .setTimestamp();
    user.client.channels.cache
      .get(channels.logs[`logs-mensajes`])
      .send({ embeds: [msgEmbed] });
  },
  deleteLog: function (user, msg, footer = ``) {
    module.exports.log(user, msg, `#770404`, footer);
  },
  voiceLog: function (user, msg, color) {
    const voiceChannel = user.client.channels.cache.get(
      channels.logs[`logs-voz`]
    );
    const url = user.displayAvatarURL({ dynamic: true, size: 64 });
    const msgEmbed = new Discord.MessageEmbed()
      .setFooter(user.username, url)
      .setDescription(msg)
      .setColor(color)
      .setTimestamp();
    voiceChannel.send({ embeds: [msgEmbed] });
  },
};

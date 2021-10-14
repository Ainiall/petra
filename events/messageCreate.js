const channels = require(`../ids/channels.json`);
const log = require(`../log.js`);
/**
 * Muestra un mensaje de debug en el canal de moderadores.
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `messageCreate`,
  execute(client, message) {
    console.log(message.content);
    const channel = client.channels.cache.get(channels.logs[`logs-mensajes`]);
    const pm = client.channels.cache.get(
      channels["Delegacion-Estudiantes"]["dudas-miembros"]
    );

    if (message.author.bot) return;

    if (message.channel.type === `DM`) {
      if (message.author.bot) return; // ignorar mensajes
      log(
        pm,
        message.author,
        `${message.author.username}ha dicho lo siguiente:\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
          ${message.content}`,
        `#09AAF7`,
        `ID: ${message.author.id}`
      );
    } else if (!message.author.bot) {
      log(
        channel,
        message.author,
        `Envió en <#${message.channel.id}>: \n**${message.content}**`,
        `#09AAF7`,
        `ID: ${message.author.id}`
      );
    }
    // TODO handle diff types of msg
  },
};

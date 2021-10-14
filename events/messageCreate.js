const channels = require(`../ids/channels.json`);
const { log, messageLog } = require(`../logs.js`);
/**
 * Muestra un mensaje de debug en el canal de moderadores.
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `messageCreate`,
  execute(message) {
    const pm = message.client.channels.cache.get(
      channels["Delegacion-Estudiantes"]["dudas-miembros"]
    );

    if (message.author.bot) return;

    if (message.channel.type === `DM`) {
      if (message.author.bot) return; // ignorar mensajes
      log(
        message.author,
        `${message.author.username}ha dicho lo siguiente:\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
            ${message.content}`,
        `#09AAF7`,
        `ID del mensaje: ${message.id}`,
        pm
      );
    } else if (!message.author.bot) {
      if (message.channel.id === channels.informacion.bienvenidas) return;
      log(
        message.author,
        `<@${message.author.id}> envió en <#${message.channel.id}>: \n**${message.content}**`,
        `#09AAF7`,
        `ID del mensaje: ${message.id}`
      );
    }
    // TODO handle diff types of msg
  },
};

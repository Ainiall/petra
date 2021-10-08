const channels = require(`../ids/channels.json`);
const log = require(`../log.js`);
/**
 * Muestra un mensaje en el canal de logs informando de que se ha borrado un mensaje,
 * indicando su contenido.
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `messageDelete`,
  execute(client, message) {
    const channel = client.channels.cache.get(channels.logs[`logs-mensajes`]);
    // Método auxiliar para enviar un mensaje al canal de log
    log(
      channel,
      message.author,
      `Se eliminó en <#${message.channel.id}> el mensaje:\n**${message.content}**`,
      `#770404`,
      `Había sido enviado el : ${message.createdAt.toLocaleString()}`
    );
  },
};

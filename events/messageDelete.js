const channels = require(`../ids/channels.json`);
const {deleteLog} = require(`../logs.js`);
/**
 * Muestra un mensaje en el canal de logs informando de que se ha borrado un mensaje,
 * indicando su contenido.
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `messageDelete`,
  async execute(message) {
    // comprobar si el mensaje fue borrado por un admin
    if (!message.guild) return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
      limit: 1,
      type: `MESSAGE_DELETE`,
    });
    const deletionLog = fetchedLogs.entries.last();

    const { executor, target } = deletionLog;
    // la persona que ha borrado el mensaje
    let exec =
      executor.id === message.author.id ? message.author.id : executor.id;

    // Método auxiliar para enviar un mensaje al canal de log
    await deleteLog(
      message.author,
      `<@${exec}> eliminó en <#${message.channel.id}> el mensaje:\n**${message.content}**`,
      `Originalmente enviado el : ${message.createdAt.toLocaleString()}`
    );
  },
};

const channels = require(`../ids/channels.json`);
const { deleteLog } = require(`../logs.js`);

/**
 * Muestra un mensaje en el log cuando un miembro abandona el servidor.
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `guildMemberRemove`,
  execute(member) {

    // Método auxiliar para enviar un mensaje al canal de log
    deleteLog(member.user, `<@${member.id}> se ha ido del servidor `);
  },
};

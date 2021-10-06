const channels = require(`../ids/channels.json`);
const log = require(`../log.js`);

/**
 * Muestra un mensaje en el log cuando un miembro abandona el servidor
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `guildMemberRemove`,
  execute(client, member) {
    console.log(`${member.user.username} se ha ido del servidor`);

    // Método auxiliar para enviar un mensaje al canal de log
    log(
      client,
      member,
      `**${member.user.username}** se ha ido del servidor`,
      `FF0000`
    );
  },
};

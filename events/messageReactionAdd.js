const channels = require(`../ids/channels.json`);
const log = require(`../log.js`);
const msgList = require(`../autoroles.js`).msgList;

/**
 * Manejo de AUTOROLES por parte de los usuarios.
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `messageReactionAdd`,
  async execute(client, reaction, user) {
    const channel = client.channels.cache.get(
      channels.informacion[`autoroles`]
    );
    const logs = client.channels.cache.get(channels.logs[`logs-mensajes`]);

    // para cada mensaje del chat autoroles
    for (let num = 0; num < msgList.length; num++) {
      let msg = await channel.messages.fetch(msgList[num][0]);

      // si la reacción ha sido en un mensaje de autorol
      if (reaction.message.id == msg.id) {
        // para cada asignatura/juego etc
        for (let i = 0; i < msgList[num][1].length; i++) {
          if (
            reaction.emoji.name == msgList[num][1][i][2] &&
            msgList[num][1][i][2] != `❌`
          ) {
            let member = await reaction.message.guild.members.fetch(user.id);
            member.roles.add(msgList[num][2]); // curso
            member.roles.add(msgList[num][1][i][1]); // asignatura

            // Método auxiliar para enviar un mensaje al canal de log
            log(
              logs,
              user,
              `Se ha añadido el rol **${msgList[num][1][i][0]}**`,
              `#F7E809`,
              `ID: ${user.id}`
            );
          } else if ((reaction.emoji.name ==  `❌`)) {
            let member = await reaction.message.guild.members.fetch(user.id);
            member.roles.remove(msgList[num][2]); // curso
            for (let j = 0; j < msgList[num][1].length; j++) {
              member.roles.remove(msgList[num][1][j][1]); // cada asignatura
            }

            // Método auxiliar para enviar un mensaje al canal de log
            log(
              logs,
              user,
              `Se ha elimando el rol **${msgList[num][1][i][0]}**`,
              `#F70909`,
              `ID: ${user.id}`
            );
          }
        }
      }
    }
  },
};

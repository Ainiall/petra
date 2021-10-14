const channels = require(`../ids/channels.json`);
const { deleteLog } = require(`../logs.js`);
const msgList = require(`../autoroles.js`).msgList;

/**
 * Manejo de AUTOROLES por parte de los usuarios.
 * Los usuarios pueden quitarse roles reaccionando a los mensajes
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `messageReactionRemove`,
  async execute(reaction, user) {
    const channel = user.client.channels.cache.get(
      channels.informacion[`autoroles`]
    );

    // para cada mensaje del chat autoroles
    for (let num = 0; num < msgList.length; num++) {
      let msg = await channel.messages.fetch(msgList[num][0]);

      // si la reacción ha sido en un mensaje de autorol
      if (reaction.message.id == msg.id) {
        // para cada asignatura/juego etc
        for (let i = 0; i < msgList[num][1].length; i++) {
          if (reaction.emoji.name == msgList[num][1][i][2]) {
            let member = await reaction.message.guild.members.fetch(user.id);
            member.roles.remove(msgList[num][1][i][1]);

            // Método auxiliar para enviar un mensaje al canal de log
            deleteLog(
              user,
              `<@${user.id}> se ha elimando el rol **${msgList[num][1][i][0]}**`,
              `ID del rol: ${msgList[num][1][i][1]}`
            );
          }
        }
      }
    }
  },
};

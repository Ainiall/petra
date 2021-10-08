const channels = require(`../ids/channels.json`);

/**
 * Muestra un mensaje de debug en el canal de moderadores.
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `messageCreate`,
  execute(client, message) {
    console.log(
      `Mensaje enviado por ${message.author.tag} en el canal ${message.channel.name}`
    );

    // TODO handle diff types of msg
  },
};

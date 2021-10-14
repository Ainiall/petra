const channels = require(`../ids/channels.json`);
const { simpleLog } = require(`../logs.js`);
const Discord = require(`discord.js`);

/**
 * Bienvenida al servidor
 * Se envía un mensaje privado a la persona en cuestión y se notifica su llegada.
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `guildMemberAdd`,
  execute(member) {

    const msgEmbed = new Discord.MessageEmbed()
      .setTitle(`BIENVENIDO A EII`)
      .setDescription(
        `Muchas gracias por unirte a nuestro servidor y formar parte de la comunidad. Te recomendamos que ` +
          `leas las normas del servidor y que te asignes los roles de tus asignaturas en el canal de ` +
          `<#${
            channels.informacion[`autoroles`]
          }>. Si quieres salir del curso general, reacciona a la ❌ del ` +
          `curso correspondiente.\n\nSi tienes alguna pregunta para Delegación, envíanos un mensaje a través` +
          ` de este chat.\n\n**Disfruta de la comunidad universitaria** ❤ `
      );

    member.send({ embeds: [msgEmbed] });

    // Método auxiliar para enviar un mensaje al canal de log

    simpleLog(member.user, ` se ha unido al servidor`, `#00bc29`);
  },
};

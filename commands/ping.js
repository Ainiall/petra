const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

/**
 * Muestra el ping actual, con 3 colores distintos según sus ms.
 * Solo el usuario que ejecuta este comando puede verlo.
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`ping`)
    .setDescription(`Muestra el ping actual (solo tú podrás verlo)`),
  async execute(interaction) {
    let ping = Math.floor(interaction.client.ws.ping);
    let color = ping > 300 ? `#FF0000` : ping > 150 ? `#FFCC00` : `#66ff66`;

    let embed = new Discord.MessageEmbed()
      .setDescription(`:satellite: Pong! **` + ping + `ms.**`)
      .setColor(color);

    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};

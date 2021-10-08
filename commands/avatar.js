const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

/**
 * Se muestra el avatar del usuario con tamaño 1024.
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`avatar`)
    .setDescription(`Muestra tu avatar con tamaño 1024 (todos podrán ver esta respuesta)`),
  async execute(interaction) {
    const embed = new Discord.MessageEmbed()
      .setImage(interaction.user.avatarURL({ format: `png`, dynamic: true, size: 1024 }))
      .setFooter(`Avatar de ${interaction.user.tag}`)
      .setColor(0x01a330);
    return interaction.reply({ embeds: [embed] });
  },
};

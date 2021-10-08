const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`avatar`)
    .setDescription(`Muestra tu avatar con tamaño 1024`),
  async execute(interaction) {
    const embed = new Discord.MessageEmbed()
      .setImage(interaction.user.avatarURL({ format: `png`, dynamic: true, size: 1024 }))
      .setFooter(`Avatar de ${interaction.user.tag}`)
      .setColor(0x01a330);
    return interaction.reply({ embeds: [embed] });
  },
};

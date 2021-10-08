const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { Permissions, MessageEmbed } = require(`discord.js`);

/**
 * Muestra información sobre el servidor al usuario que ejecuta la orden
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`server`)
    .setDescription(`Muestra información sobre el servidor (solo tú podrás verla)`),
  async execute(interaction) {
    console.log(interaction.guild.memberCount);
    if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      const embed = new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor(
          interaction.guild.name,
          interaction.guild.iconURL({ dynamic: true })
        )
        .addField(`ID`, interaction.guild.id, true)
        .addField(`Creado el`, interaction.guild.joinedAt.toDateString(), true)
        .addField(`Miembros`, interaction.guild.memberCount.toString(), true)
        .addField(`Dueño del Servidor`, `<@520278389370912809>`, true)
        .addField(
          `Programadores`,
          `<@148515656927543297><@575724048097476628>`,
          true
        )
        .addField(`Ayudante`, `<@218083715501260811>`, true)
        .setColor(0x01a330);

      return interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};

const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

/**
 * Muestra información sobre el usuario actual o el usuario que seleccione
 * con una mención @ 
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`info`)
    .setDescription(
      `Muestra información sobre el usuario seleccionado o sobre sí mismo (solo tú podrás verla)`
    )
    .addUserOption((option) => {
      return option
        .setName(`user`)
        .setDescription(
          `Usuario del que quieras obtener información (mención @)`
        );
    }),
  async execute(interaction) {
    let user = await interaction.options.getUser(`user`);
    user = user !== null ? user : interaction.member;
    const member = interaction.guild.members.cache.get(user.id);

    // para evitar errores si el usuario no tiene discord abierto
    let status = member.presence !== null ? member.presence.status : `offline`;
    switch (status) {
      case `online`:
        status = `🟢 En linea`;
      case `dnd`:
        status = `⛔ No molestar`;
      case `idle`:
        status = `🌙 Ausente`;
      case `offline`:
        status = `⚪ Desconectado`;
    }
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Informacion del usuario ${member.user.username}`)
      .setColor(`#01a330`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addField(
        `Apodo`,
        member.nickname ? member.nickname : `No tiene apodo`,
        true
      )
      .addField(`#️⃣ Tag: `, `#${member.user.discriminator}`, true)
      .addField(`🆔 ID: `, member.user.id, true)
      .addField(`© Nombre: `, `<@${member.user.id}>`, true)
      .addField(
        `Estado: `,
        member.presence === null
          ? `Sin estado` //para evitar problemas si no tiene estado
          : member.presence.activities[0] !== undefined||null
          ? member.presence.activities[0].name
          : `Sin estado`,
        true
      )
      .addField(`Conexión: `, status, true)
      .addField(
        `Avatar link: `,
        `[Pinche Aquí](${member.user.displayAvatarURL()})`,
        true
      )
      .addField(
        `Dato de creacion: `,
        member.user.createdAt.toDateString(),
        true
      )
      .addField(
        `Fecha de entrada al Servidor: `,
        member.joinedAt.toDateString(),
        true
      );

    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};

const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

/**
 * Juego bola 8
 * EL usuario hace una pregunta (campo obligatorio) y el bot da una respuesta
 * seleccionada de la lista de opciones aleatoriamente.
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`8ball`)
    .setDescription(`Haz una pregunta y descubre su respuesta`)
    .addStringOption((option) =>
      option
        .setName(`pregunta`)
        .setDescription(`La pregunta que quieres que responda`)
        .setRequired(true)
    ),
  async execute(interaction) {
    let answer = [
      `Si`,
      `No`,
      `Tal vez`,
      `Obvio`,
      `Yo digo que si`,
      `Yo digo que no`,
      `Probablemente si`,
      `Probablemente no`,
      `No lo se`,
      `¿Quién sabe?`,
      `Mejor no preguntes`,
    ];

    var random = answer[Math.floor(Math.random() * answer.length)];
    const question = await interaction.options.getString('pregunta');
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        interaction.user.username + `#` + interaction.user.discriminator,
        interaction.user.avatarURL({ dynamic: true })
      )
      .addField(`**${question}**`, `_Mi respuesta para ti es:_ **${random}**`)
      .setTimestamp()
      .setColor(`#000000`);

    return interaction.reply({ embeds: [embed] });
  },
};

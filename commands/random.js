const { SlashCommandBuilder, SlashCommandIntegerOption } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`random`)
    .setDescription(
      `Devuelve un número aleatorio (solo tú podrás ver esta respuesta)`
    )
    .addIntegerOption((option) =>
      option
        .setName(`n`)
        .setDescription(`Número máximo [0-n]`)
        .setRequired(true)
    ),
  async execute(interaction) {
    const num = await interaction.options.getInteger(`n`);
    var random = Math.floor(Math.random() * num) + 1;

    return interaction.reply({ content: random.toString(), ephemeral: true });
  },
};

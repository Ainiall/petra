const { SlashCommandBuilder } = require(`@discordjs/builders`);
const roles = require(`../ids/roles.json`);

/**
 * Se escribe una línea separatoria
 *
 * @author Diego Marty (diegomarty00)
 * @author Ángela López (Ainiall)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`separator`)
    .setDescription(`ADMIN: Muestra una línea separatoria multicolor`),
  async execute(interaction) {
    if (interaction.member.roles.cache.has(roles.discordMod)) {
      let img =
        `https://cdn.glitch.com/680ed648-5c4e-4a61-af51-e13a209da87e%2FRainbowGiffy_1.gif`;

      return interaction.reply({ files: [img] });
    }
  },
};

/**
 * Manejador de interacciones (comandos /)
 *
 * @author Ángela López (Ainiall)
 */
module.exports = {
  name: `interactionCreate`,
  execute(client, interaction) {
    console.log(
      `Usuario ${interaction.user.tag} usó el comando ${interaction.commandName} en el canal  #${interaction.channel.name}.`
    );
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: `No se ha podido ejecutar este comando 😟
        Por favor ponte en contacto con un moderador`,
        ephemeral: true,
      });
    }
  },
};

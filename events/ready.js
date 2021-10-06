const channels = require("../ids/channels.json");

/**
 * Arranca el bot.
 * Muestra un mensaje en el canal de moderadores.
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`¡Preparada! Conectada como ${client.user.tag}`);

    const channel = client.channels.cache.get(
      channels["DEII-Mod.Discord"]["pruebas-comandos"]
    );
    channel.send("El bot se reinició").then((m) => {
      m.react("✅");
    });
  },
};

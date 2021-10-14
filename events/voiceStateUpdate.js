const { voiceLog } = require(`../logs.js`);
/**
 * Muestra un mensaje en el canal de logs de voz informando de las distintas acciones
 * utilizadas por los usuarios
 *
 * @author Ángela López (Ainiall)
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  name: `voiceStateUpdate`,
  execute(oldMember, newMember) {
    let description, color;

    if (newMember.channelId == null && oldMember.channelId != null) {
      description = `❌ <@${newMember.member.user.id}> abandonó el canal **<#${oldMember.channel.id}>**`;
      color = `#F40909`;
    } else if (oldMember.channelId == null && newMember.channelId != null) {
      description = `✅ <@${newMember.member.user.id}> se unió al canal **<#${newMember.channel.id}>**`;
      color = `#43F409`;
    } else if (oldMember.selfDeaf && !newMember.selfDeaf) {
      description = `🔊 <@${newMember.member.user.id}> ahora escucha en el canal **<#${newMember.channel.id}>**`;
      color = `#09F4E0`;
    } else if (!oldMember.selfDeaf && newMember.selfDeaf) {
      description = `🔇 <@${newMember.member.user.id}> ha dejado de escuchar en el canal **<#${newMember.channel.id}>**`;
      color = `#F18CE0`;
    } else if (oldMember.selfMute && !newMember.selfMute) {
      description = `🎙 <@${newMember.member.user.id}> activó el micro en el canal **<#${newMember.channel.id}>**`;
      color = `#F4EC09`;
    } else if (!oldMember.selfMute && newMember.selfMute) {
      description = `🔕 <@${newMember.member.user.id}> desactivó el micro en el canal **<#${newMember.channel.id}>**`;
      color = `#9C09F4`;
    } else if (oldMember.selfVideo && !newMember.selfVideo) {
      description = `📷❌ <@${newMember.member.user.id}> desactivó la cámara en el canal **<#${newMember.channel.id}>**`;
      color = `#ff0080`;
    } else if (!oldMember.selfVideo && newMember.selfVideo) {
      description = `📷✅ <@${newMember.member.user.id}> activó la cámara en el canal **<#${newMember.channel.id}>**`;
      color = `#3C1ACF`;
    } else if (oldMember.streaming && !newMember.streaming) {
      description = `🖥❌ <@${newMember.member.user.id}> dejó de compartir pantalla en el canal **<#${newMember.channel.id}>**`;
      color = `#000000`;
    } else if (!oldMember.streaming && newMember.streaming) {
      description = `🖥✅ <@${newMember.member.user.id}> está compartiendo pantalla en el canal **<#${newMember.channel.id}>**`;
      color = `#F5F0F0`;
    } else {
      description = `🖥☑️ <@${oldMember.member.user.id}> cambió al canal **<#${newMember.channel.id}>**`;
      color = `#004cff`;
    }
    // Método auxiliar para enviar un mensaje al canal de log
    voiceLog(newMember.member.user, description, color);
  },
};

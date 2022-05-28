import { joinVoiceChannel } from "@discordjs/voice"
import register_commands from "../utils/test/register_commands.js";

export default client => {

     client.on("ready", () => {
          console.log("Bot giriş yaptı!")

          let guilds = client.guilds.cache.size;
          let members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);

          const arrayOfStatus = [
               `Dil sistemi aktif!`,
               `Made by Achela`,
               `Moderasyon ve eğlence botu!`,
               `${guilds} sunucuda, ${members} üyeye hizmet veriyor!`
          ];

          let index = 0
          setInterval(() => {
               if (index === arrayOfStatus.length) index = 0
               const status = arrayOfStatus[index]
               client.user.setActivity(status);
               index++
          }, 5000)

          let Achela = client.channels.cache.get("980133387442467107");
          if (Achela) joinVoiceChannel({ channelId: Achela.id, guildId: Achela.guild.id, adapterCreator: Achela.guild.voiceAdapterCreator })

          // register_commands(client, "global")
     })
}
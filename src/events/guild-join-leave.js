import { MessageEmbed } from "discord.js"

export default client => {

     client.on("guildCreate", async (guild) => {

          const owner = await guild.fetchOwner()
          const channel = client.channels.cache.get("979474773157482567")
          const { createdTimestamp } = guild;

          const embedj = new MessageEmbed()
               .setTitle(`Sunucuya Eklendim!`)
               .setThumbnail(guild.iconURL({ dynamic: true }))
               .addFields(
                    {
                         name: `Sunucu Adı`,
                         value: `${guild.name}`,
                         inline: true,
                    },
                    {
                         name: `Sunucu ID`,
                         value: `${guild.id}`,
                         inline: true,
                    },
                    {
                         name: `Sunucu Sahibi`,
                         value: `${owner}`,
                         inline: true,
                    },
                    {
                         name: "Sunucu Sahibi ID",
                         value: `${guild.ownerId}`,
                         inline: true,
                    },
                    {
                         name: `Üye Sayısı`,
                         value: `${guild.memberCount}`,
                         inline: true,
                    },
                    {
                         name: `Kuruluş Tarihi`,
                         value: `<t:${parseInt(createdTimestamp / 1000)}:R>`,
                         inline: true,
                    }
               )
               .setColor("GREEN")
               .setTimestamp()
          channel.send({ embeds: [embedj] })

     })

     client.on("guildDelete", async (guild) => {

          const owner = await guild.fetchOwner()
          const channel = client.channels.cache.get("979474773157482567")
          const { createdTimestamp } = guild;

          const embedl = new MessageEmbed()
               .setTitle(`Sunucudan Ayrıldım!`)
               .setThumbnail(guild.iconURL({ dynamic: true }))
               .addFields(
                    {
                         name: `Sunucu Adı`,
                         value: `${guild.name}`,
                         inline: true,
                    },
                    {
                         name: `Sunucu ID`,
                         value: `${guild.id}`,
                         inline: true,
                    },
                    {
                         name: `Sunucu Sahibi`,
                         value: `${owner}`,
                         inline: true,
                    },
                    {
                         name: "Sunucu Sahibi ID",
                         value: `${guild.ownerId}`,
                         inline: true,
                    },
                    {
                         name: `Üye Sayısı`,
                         value: `${guild.memberCount}`,
                         inline: true,
                    },
                    {
                         name: `Kuruluş Tarihi`,
                         value: `<t:${parseInt(createdTimestamp / 1000)}:R>`,
                         inline: true,
                    }
               )
               .setColor("RED")
               .setTimestamp()
          channel.send({ embeds: [embedl] })

     })

}
import { MessageEmbed } from "discord.js"
import { t } from "i18next"

export const data = {
     name: t("server.name"),
     description: t("server.description"),
     async execute(interaction) {

          const { emoji } = interaction.client
          const { guild, locale } = interaction
          const { createdTimestamp, members, channels, emojis, stickers } = guild;

          const owner = await guild.fetchOwner()
          const embed = new MessageEmbed()
               .setColor("DARK_GREEN")
               .setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
               .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
               .addFields(
                    { name: `${emoji("wumpus")} ${t("server.embed1.servername", { lng: locale })}`, value: `${guild.name}`, inline: true },
                    { name: `${emoji("owner")} ${t("server.embed1.serverowner", { lng: locale })}`, value: `${owner}`, inline: true },
                    { name: `${emoji("id")} ${t("server.embed1.serverid", { lng: locale })}`, value: `${guild.id}`, inline: true },
                    { name: `${emoji("time")} ${t("server.embed1.servercrate", { lng: locale })}`, value: `<t:${parseInt(createdTimestamp / 1000)}:R>`, inline: true },
                    {
                         name: t("server.embed2.name", { lng: locale }),
                         value:
                              `
                 ${emoji("online")} ${t("server.embed2.online", { lng: locale })}: ${members.cache.filter((m) => m.presence?.status === "online").size}
                 ${emoji("idle")} ${t("server.embed2.idle", { lng: locale })}: ${members.cache.filter((m) => m.presence?.status === "idle").size}
                 ${emoji("dnd")} ${t("server.embed2.dnd", { lng: locale })}: ${members.cache.filter((m) => m.presence?.status === "dnd").size}
                 ${emoji("offline")} ${t("server.embed2.offline", { lng: locale })}: ${members.cache.filter((m) => m.presence?.status === "offline").size}
                 `,
                         inline: true
                    },
                    {
                         name: `${emoji("member")} ${t("server.embed3.name", { lng: locale })}`,
                         value:
                              `
                 ${emoji("user")} ${t("server.embed3.member", { lng: locale })}: ${members.cache.filter((m) => !m.user.bot).size}
                 ${emoji("bot")} ${t("server.embed3.bots", { lng: locale })}: ${members.cache.filter((m) => m.user.bot).size}
                 `,
                         inline: true
                    },
                    {
                         name: `${emoji("flag")} ${t("server.embed4.name", { lng: locale })}`,
                         value:
                              `
                 ${emoji("emoji")} ${t("server.embed4.animated", { lng: locale })}: ${emojis.cache.filter((e) => e.animated).size}
                 ${emoji("emoji")} ${t("server.embed4.static", { lng: locale })}: ${emojis.cache.filter((e) => !e.animated).size}
                 ${emoji("emoji")} ${t("server.embed4.sticker", { lng: locale })}: ${stickers.cache.size}
                 `,
                         inline: true
                    },
                    {
                         name: `${emoji("channels")} ${t("server.embed5.name", { lng: locale })}`,
                         value:
                              `
             ${emoji("text")} ${t("server.embed5.text", { lng: locale })}: ${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}
             ${emoji("speaker")} ${t("server.embed5.voice", { lng: locale })}: ${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}
             ${emoji("thread")} ${t("server.embed5.thread", { lng: locale })}: ${channels.cache.filter((c) => c.type === "GUILD_NEWS_THREAD" && "GUILD_PRIVATE_THREAD" && "GUILD_PUBLIC_THREAD").size}
             ${emoji("category")} ${t("server.embed5.category", { lng: locale })}: ${channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}
             ${emoji("stage")} ${t("server.embed5.stage", { lng: locale })}: ${channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}
              `,
                         inline: true
                    }
               )
          interaction.reply({ embeds: [embed] })

     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
     name_localizations: {
          tr: t("server.name", { lng: "tr" }),
          de: t("server.name", { lng: "de" }),
     },
     description_localizations: {
          tr: t("server.description", { lng: "tr" }),
          de: t("server.description", { lng: "de" }),
     },
     dm_permission: false
}
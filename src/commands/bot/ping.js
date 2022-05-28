import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
     name: t("ping.name"),
     description: t("ping.description"),
     async execute(interaction) {

          const { emoji } = interaction.client

          const dc_ping = interaction.client.ws.ping
          const bot_ping = Date.now() - interaction.createdTimestamp

          const response = new MessageEmbed()
               .setColor("WHITE")
               .addFields(
                    { name: `${emoji("discord")} ${t("ping.discord_latency", { lng: interaction.locale })}`, value: `${dc_ping}ms`, inline: true },
                    { name: `${emoji("ping")} ${t("ping.bot_latency", { lng: interaction.locale })}`, value: `${bot_ping}ms`, inline: true }
               )
          interaction.reply({ embeds: [response] })
     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
     name_localizations: {
          tr: t("ping.name", { lng: "tr" }),
          de: t("ping.name", { lng: "de" }),
     },
     description_localizations: {
          tr: t("ping.description", { lng: "tr" }),
          de: t("ping.description", { lng: "de" }),
     }
}
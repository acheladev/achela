import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
     name: t("fbi.name"),
     description: t("fbi.description"),
     execute(interaction) {

          const fbi = new MessageEmbed()
               .setTitle(`${t("fbi.title", { lng: interaction.locale })}`)
               .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")

          interaction.reply({ embeds: [fbi] })
     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
     name_localizations: {
          tr: t("fbi.name", { lng: "tr" }),
          de: t("fbi.name", { lng: "de" }),
     },
     description_localizations: {
          tr: t("fbi.description", { lng: "tr" }),
          de: t("fbi.description", { lng: "de" }),
     }
}
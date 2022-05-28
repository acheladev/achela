import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { t } from "i18next"

export const data = {
     name: t("help.name"),
     description: t("help.description"),
     execute(interaction) {

          const links = new MessageActionRow()
               .addComponents(
                    new MessageButton()
                         .setURL("https://discord.com/api/oauth2/authorize?client_id=950403923687133254&permissions=8&scope=bot%20applications.commands")
                         .setLabel(`${t("help.buttons.label1", { lng: interaction.locale })}`)
                         .setStyle("LINK"),
                    new MessageButton()
                         .setURL("https://discord.gg/UBYg9bSMAh")
                         .setLabel(`${t("help.buttons.label2", { lng: interaction.locale })}`)
                         .setStyle("LINK"),
                    new MessageButton()
                         .setURL("https://top.gg/bot/950403923687133254")
                         .setLabel(`${t("help.buttons.label3", { lng: interaction.locale })}`)
                         .setStyle("LINK")
               )

          const embed = new MessageEmbed()
               .setColor("BLURPLE")
               .setTitle("Achela Bot")
               .setDescription(`${t("help.embed.description", { lng: interaction.locale })}`)

          interaction.reply({ embeds: [embed], components: [links] })

     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
     name_localizations: {
          tr: t("help.name", { lng: "tr" }),
          de: t("help.name", { lng: "de" }),
      },
      description_localizations: {
          tr: t("help.description", { lng: "tr" }),
          de: t("help.description", { lng: "de" }),
      },
}
import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
     name: t("suggest.name"),
     description: t("suggest.description"),
     async execute(interaction) {

          const { embed, emoji } = interaction.client

          const bildiri = interaction.options.getString('your_suggestion')
          const channel = interaction.client.channels.cache.get("979474925368803368")

          interaction.reply({
               embeds: [
                    embed(`${emoji("verif")} ${t("suggest.suggest", {lng: interaction.locale})}`, "INFO")
               ],
               ephemeral: true
          })

          const errors = new MessageEmbed()
               .setColor("FUCHSIA")
               .setTitle(`${interaction.user.username} Öneri Yaptı!`)
               .setDescription(`${bildiri}`)
               .setFooter({ text: `Öneriyi yapan kişinin ID'si ${interaction.user.id}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
               .setTimestamp()
          channel.send({ embeds: [errors] })

     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
     name_localizations: {
          tr: t("suggest.name", { lng: "tr" }),
          de: t("suggest.name", { lng: "de" }),
     },
     description_localizations: {
          tr: t("suggest.description", { lng: "tr" }),
          de: t("suggest.description", { lng: "de" }),
     },
     options: [
          {
               name: t("suggest.suggest_options.name"),
               description: t("suggest.suggest_options.description"),
               name_localizations: {
                    tr: t("suggest.suggest_options.name", { lng: "tr" }),
                    de: t("suggest.suggest_options.name", { lng: "de" }),
               },
               description_localizations: {
                    tr: t("suggest.suggest_options.description", { lng: "tr" }),
                    de: t("suggest.suggest_options.description", { lng: "de" }),
               },
               type: 3,
               required: true
          }
     ]
}

// export const slash_data = new SlashCommandBuilder()
//      .setName(data.name)
//      .setDescription(data.description)
//      .addStringOption(öneri =>
//           öneri.setName("öneri")
//                .setDescription("Önerinizi buraya girin.")
//                .setRequired(true)
//      )
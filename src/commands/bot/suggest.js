import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
     name: t("suggest.name"),
     description: t("suggest.description"),
     cooldown: 60,
     async execute(interaction) {

          const { embed, emoji } = interaction.client

          const bildiri = interaction.options.getString('suggest')
          const channel = interaction.client.channels.cache.get("979474925368803368")

          interaction.reply({
               embeds: [
                    embed(`${emoji("verif")} ${t("suggest.suggest", { lng: interaction.locale })}`, "INFO")
               ],
               ephemeral: true
          })

          const errors = new MessageEmbed()
               .setTitle(`${interaction.user.username} Adlı Kullanıcı Bir Öneride Bulundu!`)
               .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
               .addFields(
                    { name: `${emoji("member")} Kullanıcı`, value: `${interaction.user}`, inline: true },
                    { name: `${emoji("id")}Kullanıcı ID'si`, value: `${interaction.user.id}`, inline: true },
                    { name: `${emoji("search")}Bildirilen Sunucu`, value: `${interaction.guild}`, inline: true },
                    { name: `${emoji("bulb")} Öneri`, value: `\`\`\`${bildiri}\`\`\``, inline: true }
               )
               .setColor("BLURPLE")
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
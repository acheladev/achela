import cooldown_control from "../utils/cooldown_control.js"
import auto_complete from "../utils/event-utils/auto_complete.js"
import { t } from "i18next"

export default client => {

     const owners = process.env.owner_id

     const { embed } = client

     client.on("interactionCreate", async interaction => {
          if (interaction.isAutocomplete()) auto_complete(interaction)

          if (!interaction.isApplicationCommand()) return

          const command = client.commands.get(interaction.commandName)
          if (!command) return

          // permission control
          if (command.data.permission && !interaction.member.permissions.has(command.data.permission)) return interaction.reply({
               embeds: [
                    embed(t("missing_permissions", {
                         ns: "common", lng: interaction.locale,
                         permission: t(command.data.permission, { ns: "permissions", lng: interaction.locale })
                    }), "RED")
               ],
               ephemeral: true
          })

          // cooldown control
          const cooldown = cooldown_control(command, interaction.user.id)
          if (cooldown) return interaction.reply({
               embeds: [
                    embed(t("cooldown_error", { ns: "common", lng: interaction.locale, cooldown }), "RED")
               ],
               ephemeral: true
          })

          try {
               command.data.execute(interaction)
          } catch (e) {
               interaction.reply({ embeds: [embed(t("unexpected_error", { ns: "common", lng: interaction.locale }), "RED")] })
               console.log(e)
          }

     })

}
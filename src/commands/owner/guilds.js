import { MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

export const data = {
    name: "tops",
    description: "Sadece ownera özel.",
    async execute(interaction) {

        const { embed } = interaction.client
        let guilds = interaction.client.guilds.cache.size;
        let members = interaction.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);

        if (interaction.member.id !== "615079401473703956") return interaction.reply({
            embeds: [
                embed("Bu komudu sadece bot sahibi kullanabilir!", "RED")
            ],
            ephemeral: true
        })

        const tops = new MessageEmbed()
            .setTitle(`Toplam Sunucu Sayısı: ${guilds}, Toplam Üye Sayısı: ${members}`)
            .setDescription(interaction.client.guilds.cache.map(guild => `${guild.name} | ${guild.id} | ${guild.memberCount}`).join("\n"))
            .setTimestamp()
        interaction.reply({ embeds: [tops] })


    }

}

export const slash_data = {
    name: data.name,
    description: data.description,
    dm_permission: false
}
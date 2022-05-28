import { Client, Collection } from "discord.js"
import { readdirSync } from "fs"
import { AutoPoster } from "topgg-autoposter"
import i18next from "i18next"
import translationBackend from "i18next-fs-backend"
import 'dotenv/config'

const client = new Client({
     intents: 131071,
})

//* Top.gg autoposter
// const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MDQwMzkyMzY4NzEzMzI1NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjUyMDA2NTEwfQ.NrwxQPBMypPDEc01Uc-BlzSJZrMt5fR53RrVhACbmOk', client)

// ap.on('posted', (stats) => {
//      const channel = client.channels.cache.get("973255444833402910")
//      channel.send(`Posted stats to Top.gg | ${stats.serverCount} servers`)
// })

//* Asigments
client.commands = new Collection()
client.emoji = (emojiName) => client.guilds.cache.get(process.env.owner_guild_id).emojis.cache.find(e => e.name == emojiName) || "🤖"
client.embed = await import("./utils/bot/embed.js").then(m => m.default)

//*Initialize multi language system
await i18next
     .use(translationBackend)
     .init({
          ns: readdirSync("./locales/en-US").map(a => a.replace(".json", "")),
          defaultNS: "commands",
          fallbackLng: "en-US",
          preload: readdirSync("./locales"),
          backend: {
               loadPath: "./locales/{{lng}}/{{ns}}.json"
          }
     })

//*Event Loader
readdirSync("./events").forEach(async file => {
     const event = await import(`./events/${file}`).then(m => m.default)
     event(client)
})

//*Command Loader
readdirSync("./commands").forEach(category => {

     readdirSync(`./commands/${category}`).forEach(async file => {
          const command = await import(`./commands/${category}/${file}`)
          client.commands.set(command.data.name, command)
     })
})

client.login(process.env.token)
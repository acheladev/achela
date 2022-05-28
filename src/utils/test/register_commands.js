export default (client, type = "global") => {

     const commands = client.commands.map(command => command.slash_data)

     if (type == "global") {
          client.application.commands.set(commands)
               .then(() => {
                    console.log("Global commands registered!")
               })
     }
     else if (type == "guild") {
          const guild = client.guilds.cache.get("937730844141977631")
          guild.commands.set([])
               .then(() => {
                    console.log("Guild commands registered!")
               })
     }

}
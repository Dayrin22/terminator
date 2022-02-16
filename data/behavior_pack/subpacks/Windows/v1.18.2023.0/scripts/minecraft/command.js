import { world } from "mojang-minecraft";
import * as message from 'scripts/gametests/commands/message.js';
import { viewObj } from 'scripts/minecraft/viewObj.js';
import * as auth from 'scripts/credentials/access.js';
let prefix = "!";

world.events.beforeChat.subscribe((data) => {
  // Chat logging stuff
  let playerName = data.sender.name ?? data.sender.nameTag;

  // Main script
  if (data.message.substring(0, 1) == prefix && auth.players.includes(playerName)) {
    data.cancel = true;
    var command = data.message.split('');
    command.shift();
    command = command.join('');
    try {
      const CommandResult = viewObj(world.getDimension('overworld').runCommand(`execute ${playerName} ~ ~ ~ ${command}`)).join('\n§r');
      message.client(playerName, `/${command}`);
      message.client(playerName, CommandResult);
    } catch (error) {
      const CommandResult = viewObj(JSON.parse(error)).join('\n§r');
      message.client(playerName, `/${command}`);
      message.client(playerName, CommandResult);
    };
  }
});

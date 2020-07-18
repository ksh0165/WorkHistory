const tmi = require('tmi.js');
const say = require('say');

// Define configuration options
const opts = {
  identity: {
    username: 'ksh0165',
    password: 'oauth:6fw91j9caayx6zkcxrg4fcuh97g63d'
  },
  channels: [
    'chatbotstudy'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
  }else if (commandName === '!hello') {
	client.say(target, 'hello tmi');
    console.log(`* Executed ${commandName} command`);
  } else if(context.username === 'yeojinnnn'){
	say.speak(`${context.username}`+`${commandName}`+'님 반갑습니다.');
  }else if(context.username === 'taryoony'){
	say.speak(`${context.username}`+`${commandName}`+'님 반갑습니다.');
  }
  else {
	say.speak(`${commandName}`);
    console.log(context);
  }
}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

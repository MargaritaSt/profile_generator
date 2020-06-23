const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable \:) ', (answer) => {
  let profile = "\n";
  profile += "Your name or nickname is: " + answer + "\n";

  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile += 'Hey! You like doing ' + answer + "\n";
      
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile += 'You listen ' + answer + " while doing that." + "\n";
        
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        profile += 'Your favorite meal: ' + answer + "\n";
          
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile += 'You favorite thing to eat for the meal: ' + answer + "\n";
            
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile += 'Your absolute favorite sport: ' + answer + "\n";
              
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile += 'Your superpower:" ' + answer + "\n";
              console.log(profile);
              rl.close();
            });

          });

        });

      });

    });
  });
});
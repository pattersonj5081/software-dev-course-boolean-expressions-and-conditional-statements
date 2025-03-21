/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

  let playerGems = 150; // Example starting gems
  
  const wares = {
    coat: 50,
    water: 50,
    sword: 100,
    compass: 100
  };
  console.log ("Before you begin your journey, please know it will be perilous.") 
  const choice1 = readline.question('Would you like to purchase something? (yes/no): ');
  
  if (choice1 === 'yes') {
    console.log('Wares:');
    for (const [item, cost] of Object.entries(wares)) {
      console.log(`${item} - ${cost} gems`);
    }
  
    const itemChoice = readline.question('What would you like to purchase? ');
  
    if (wares[itemChoice] !== undefined) {
      const itemCost = wares[itemChoice];
      if (playerGems >= itemCost) {
        playerGems -= itemCost;
        console.log('Great choice!');
        console.log(`You have ${playerGems} gems remaining.`);
      } else {
        console.log("You don't have enough gems for this item.");
      }
    } else {
      console.log('Invalid item selected.');
    }
  } else {
    console.log('Good luck on your journey!');
  }
  
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice2 = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice2 === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice2 === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  
} else if (choice2 === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
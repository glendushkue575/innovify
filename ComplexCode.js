/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a text-based adventure game.
   It includes various objects, functions, and algorithms to create an interactive and engaging game experience.
*/

// Object representing a player
class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  attack(enemy) {
    const damage = Math.floor(Math.random() * 10) + 1;
    enemy.receiveDamage(damage);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated!`);
    } else {
      console.log(`${this.name} received ${damage} damage.`);
    }
  }
}

// Object representing an enemy
class Enemy {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack(player) {
    const damage = Math.floor(Math.random() * 10) + 1;
    player.receiveDamage(damage);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`The ${this.name} has been defeated!`);
    } else {
      console.log(`The ${this.name} received ${damage} damage.`);
    }
  }
}

// Initialize the player
const player = new Player("John");

// Initialize enemies
const goblin = new Enemy("Goblin", 20);
const troll = new Enemy("Troll", 50);
const dragon = new Enemy("Dragon", 100);

// Game logic
console.log("Welcome to the Adventure Game!");

// Introduction
console.log("You find yourself in a dark forest...");
console.log("There are three paths ahead of you.");

// Choosing a path
const chosenPath = prompt("Which path will you choose? (1, 2, or 3)");

if (chosenPath === "1") {
  console.log("You encounter a goblin.");
  player.attack(goblin);
  goblin.attack(player);
} else if (chosenPath === "2") {
  console.log("You encounter a troll.");
  player.attack(troll);
  troll.attack(player);
} else if (chosenPath === "3") {
  console.log("You encounter a dragon.");
  player.attack(dragon);
  dragon.attack(player);
} else {
  console.log("Invalid path! The game ends.");
  process.exit(0);
}

console.log("The game ends. Thank you for playing!");
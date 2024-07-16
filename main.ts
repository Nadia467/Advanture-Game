#! /usr/bin/env node
import inquirer from "inquirer";
//player class
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrese() {
    this.fuel = 100;
  }
}
//oponent class
class Oponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let player = await inquirer.prompt([
  {
    name: "name",
    message: "Plz enter your name:",
    type: "input",
  },
]);

let oponent = await inquirer.prompt([
  {
    name: "select",
    message: "select your openent",
    type: "list",
    choices: [
      { name: "skeleton", value: "skeleton" },
      { name: "Alien", value: "Alien" },
      { name: "Zombie", value: "Zombie" },
    ],
  },
]);
let P1 = new Player(player.name);
let O1 = new Oponent(oponent.select);
do {
  //skeleton
  if (oponent.select === "skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        message: "what you like to do",
        type: "list",
        choices: [
          { name: "Attack", value: "Attack" },
          { name: "Drink Portion", value: "Drink Portion" },
          { name: "Run for your life", value: "Run for your life" },
        ],
      },
    ]);
    //skeleron attack
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        P1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (P1.fuel <= 0) {
          console.log("You Loose, Better Luck Next time");
          process.exit();
        }
      }
      if (num <= 0) {
        O1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (O1.fuel <= 0) {
          console.log("You win!!!!");
          process.exit();
        }
      }
    }
    //drink portion
    if (ask.opt == "Drink Portion") {
      P1.fuelIncrese();
      console.log(`You drink Health Portion Your Fuel is ${P1.fuel}`);
    }
    //skeleton run for your life
    if (ask.opt == "Run for your life") {
      console.log("You Loose, Better Luck Next time :(");
      process.exit();
    }
  }

  //Alien
  if (oponent.select === "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        message: "what you like to do",
        type: "list",
        choices: [
          { name: "Attack", value: "Attack" },
          { name: "Drink Portion", value: "Drink Portion" },
          { name: "Run for your life", value: "Run for your life" },
        ],
      },
    ]);
    //Alien attack
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        P1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (P1.fuel <= 0) {
          console.log("You Loose, Better Luck Next time");
          process.exit();
        }
      }
      if (num <= 0) {
        O1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (O1.fuel <= 0) {
          console.log("You win!!!!");
          process.exit();
        }
      }
    }
    //Alien drink portion
    if (ask.opt == "Drink Portion") {
      P1.fuelIncrese();
      console.log(`You drink Health Portion Your Fuel is ${P1.fuel}`);
    }
    //Alien run for your life
    if (ask.opt == "Run for your life") {
      console.log("You Loose, Better Luck Next time :(");
      process.exit();
    }
  }

  //zombie
  if (oponent.select === "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        message: "what you like to do",
        type: "list",
        choices: [
          { name: "Attack", value: "Attack" },
          { name: "Drink Portion", value: "Drink Portion" },
          { name: "Run for your life", value: "Run for your life" },
        ],
      },
    ]);
    //zombie attack
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        P1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (P1.fuel <= 0) {
          console.log("You Loose, Better Luck Next time :(");
          process.exit();
        }
      }
      if (num <= 0) {
        O1.fuelDecrease();
        console.log(`${P1.name} fuel is ${P1.fuel}`);
        console.log(`${O1.name} fuel is ${O1.fuel}`);
        if (O1.fuel <= 0) {
          console.log("You win!!!!");
          process.exit();
        }
      }
    }
    //zombie drink portion
    if (ask.opt == "Drink Portion") {
      P1.fuelIncrese();
      console.log(`You drink Health Portion Your Fuel is ${P1.fuel}`);
    }
    //zombie run for your life
    if (ask.opt == "Run for your life") {
      console.log("You Loose, Better Luck Next time");
      process.exit();
    }
  }
} while (true);

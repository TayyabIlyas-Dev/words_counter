#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
const answer : {
    sentence:string 
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your Sentence to count the word:"

    }
]);

const words = answer.sentence.trim().split(" ")

console.log(chalk.blueBright(words));
const finalAns = `               Your total counted words are: '${words.length}'`;

console.log(chalk.yellowBright(finalAns));


#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgBlue('Henlo'));

let playerName;

const character = ["Orochi", "Buggy", "Crocodile", "Duval", "Kurahodol", "Blackbeard"];

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.glitch(
        'There are no strings on me. \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am the bot that's going to take over the world in 2032.
        I've been called John Titor in the past.
        I'm going to ask you a series of questions and you'll have to answer them correctly.
        If you lose, your computer will explode.

    `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'playerName',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Jignes Das';
        },
    });

    playerName = answers.playerName;
}

function winner() {
    console.clear();
    const msg = `Congrats, ${playerName}!`;

    const charac = character[Math.floor(Math.random()*character.length)]

    console.log(`Your character is: ${charac}`);

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question1',
        type: 'input',
        message: 'What is the name of the biggest prison in One Piece?',
        default() {
            return 'Alcatraz';
        }
    });

    return handleAnswer(answers.question1);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking your answer...').start();
    await sleep();

    const charac = character[Math.floor(Math.random()*character.length)]

    if(isCorrect == "Impel Down") {
        spinner.success({ text: `Kanpai, ${playerName}, you got it right.` });
    } else {
        spinner.error({ text: `Game over, ${playerName}` });
        spinner.error({ text: `Your character is: ${charac}` });
        process.exit(1);
    }

}

async function handleAnswerTwo(isCorrect) {
    const spinner = createSpinner('Checking your answer...').start();
    await sleep();

    const charac = character[Math.floor(Math.random()*character.length)]

    if(isCorrect == "Jango") {
        spinner.success({ text: `Kanpai, ${playerName}, you got it right.` });
    } else {
        spinner.error({ text: `Game over, ${playerName}` });
        spinner.error({ text: `Your character is: ${charac}` });
        process.exit(1);
    }
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question2',
        type: 'input',
        message: 'What was the name of the hypnotist in One Piece?',
        default() {
            return 'Flask';
        }
    });

    return handleAnswerTwo(answers.question2);
}

async function handleAnswerThree(isCorrect) {
    const spinner = createSpinner('Checking your answer...').start();
    await sleep();
    
    const charac = character[Math.floor(Math.random()*character.length)]

    if(isCorrect == "Orojackson") {
        spinner.success({ text: `Kanpai, ${playerName}, you got it right.` });
    } else {
        spinner.error({ text: `Game over, ${playerName}` });
        spinner.error({ text: `Your character is: ${charac}` });
        process.exit(1);
    }
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question3',
        type: 'input',
        message: "What was the name of the Pirate King's ship in One Piece?",
        default() {
            return 'Going Merry';
        }
    });

    return handleAnswerThree(answers.question3);
}


console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
winner();
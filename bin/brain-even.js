#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import readlineSync from 'readline-sync';

//greeting();
const userName = greeting();

let correctAnswers = 0;
while (correctAnswers < 3) {


    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

    const number = Math.floor(Math.random() * (100 - 1));
    const isEven = (number) => {
        if (number % 2 === 0) {
            return true;

        } else if (number % 2 !== 0) {
            return false;

        }
    }
    console.log(number);


    const userAnswer = readlineSync.question();

    if (isEven(number) == true && userAnswer == 'yes' || isEven(number) == false && userAnswer == 'no') {
        console.log('¡Correcto!');
        correctAnswers += 1;
    } else {
        if (userAnswer == 'yes') {
            console.log("'yes' es una respuesta incorrecta ;(. La respuesta correcta era 'no'");
        } else if (userAnswer == 'no') {
            console.log("'no' es una respuesta incorrecta ;(. La respuesta correcta era 'yes'");
        } else { console.log('respuesta incorrecta') }
        correctAnswers = 0;
    }
    if (correctAnswers === 3) { console.log(`¡Felicidades, ${userName}!`); }
}

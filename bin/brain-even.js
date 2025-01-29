#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

let correctAnswers = 0;
while (correctAnswers < 3) {
  console.log(
    'Responde "yes" si el número es par, de lo contrario responde "no".',
  );

  const number = Math.floor(Math.random() * (100 - 1));
  const isEven = () => number % 2 === 0;

  console.log(`Pregunta: ${number}`);

  const userAnswer = readlineSync.question();

  if (
    (isEven(number) === true && userAnswer === 'yes')
    || (isEven(number) === false && userAnswer === 'no')
  ) {
    console.log('¡Correcto!');
    correctAnswers += 1;
  } else if (userAnswer === 'yes') {
    console.log(
      "'yes' es una respuesta incorrecta ;(. La respuesta correcta era 'no'",
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  } else if (userAnswer === 'no') {
    console.log(
      "'no' es una respuesta incorrecta ;(. La respuesta correcta era 'yes'",
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  } else {
    console.log('respuesta incorrecta');
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  }
  if (correctAnswers === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}

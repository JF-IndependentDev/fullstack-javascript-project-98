#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { greeting } from '../src/cli.js';

const userName = greeting();

console.log('¿Cuál es el resultado de la expresión?');

let respuestasCorrectas = 0;

while (respuestasCorrectas < 3) {
  const pair = cons(
    Math.floor(Math.random() * (100 - 1)),
    Math.floor(Math.random() * (100 - 1)),
  );
  const operators = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operators.length);

  const correctAnswer = () => {
    const num1 = car(pair);
    const num2 = cdr(pair);

    if (random === 0) {
      return num1 + num2;
    }
    if (random === 1) {
      return num1 - num2;
    }
    if (random === 2) {
      return num1 * num2;
    }
    return null;
  };

  console.log(`Pregunta: ${car(pair)} ${operators[random]} ${cdr(pair)}`);

  const userAnswer = readlineSync.question('Tu respuesta:');

  if (parseInt(userAnswer, 10) === correctAnswer()) {
    console.log('¡Correcto!');
    respuestasCorrectas += 1;
  } else {
    console.log(
      `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer()}'.`,
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  }
}
if (respuestasCorrectas === 3) {
  console.log(`¡Felicidades, ${userName}!`);
}

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import greeting from './cli.js';

const runGcd = () => {
  const userName = greeting();

  console.log('Encuentra el máximo común divisor de los números dados.');

  let respuestasCorrectas = 0;

  while (respuestasCorrectas < 3) {
    const pair = cons(
      Math.floor(Math.random() * (100 - 1)),
      Math.floor(Math.random() * (100 - 1)),
    );
    console.log(`Pregunta: ${car(pair)} ${cdr(pair)}`);

    const greatestCommonDivisor = (a, b) => {
      let x = a;
      let y = b;
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    };

    const num1 = car(pair);
    const num2 = cdr(pair);
    const gcd = greatestCommonDivisor(num1, num2);

    const userAnswer = readlineSync.question('Tu respuesta:');

    if (parseInt(userAnswer, 10) === gcd) {
      console.log('¡Correcto!');
      respuestasCorrectas += 1;
    } else {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${gcd}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      break;
    }
  }
  if (respuestasCorrectas === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
};
export default runGcd;

#!/usr/bin/env node
import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

const userName = greeting();

console.log(
  'Responde "yes" si el número dado es primo. De lo contrario, responde "no".',
);
let correctAnswers = 0;
while (correctAnswers < 3) {
  const number = Math.floor(Math.random() * (100 - 1)) + 1;
  const isPrime = () => {
    if (number <= 1) return false;
    for (let i = 2; Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  console.log(`Pregunta: ${number}`);

  const userAnswer = readlineSync.question();

  if (
    (isPrime(number) === true && userAnswer === "yes") ||
    (isPrime(number) === false && userAnswer === "no")
  ) {
    console.log("¡Correcto!");
    correctAnswers += 1;
  } else if (userAnswer === "yes") {
    console.log(
      "'yes' es una respuesta incorrecta ;(. La respuesta correcta era 'no'",
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  } else if (userAnswer === "no") {
    console.log(
      "'no' es una respuesta incorrecta ;(. La respuesta correcta era 'yes'",
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  } else {
    console.log("respuesta incorrecta");
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  }
  if (correctAnswers === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}

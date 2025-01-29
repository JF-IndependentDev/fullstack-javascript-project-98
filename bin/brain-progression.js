#!/usr/bin/env node
import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

const userName = greeting();

console.log("¿Qué número falta en la progresión?");
let respuestasCorrectas = 0;

while (respuestasCorrectas < 3) {
  const progression = [];
  const firstNumber = Math.floor(Math.random() * (100 - 1));
  const length = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
  const sequence = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const spotFromProgression = Math.floor(Math.random() * (length - 1 + 1));

  progression.push(firstNumber);

  let x = firstNumber;

  for (let i = 1; i < length; i += 1) {
    x += sequence;
    progression.push(x);
  }
  const correctAnswer = progression[spotFromProgression];
  progression[spotFromProgression] = " ..";
  console.log(`Pregunta: ${progression.toString()}`);

  const userAnswer = readlineSync.question("Tu respuesta:");

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log("¡Correcto!");
    respuestasCorrectas += 1;
  } else {
    console.log(
      `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`,
    );
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    break;
  }
}
if (respuestasCorrectas === 3) {
  console.log(`¡Felicidades, ${userName}!`);
}

#! /usr/bin/env node
import inquirer from "inquirer";

const Num = await inquirer.prompt([
  { message: " Enter first number", type: "number", name: "firstNumber" },
  { message: " Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of these operator to perform operation",
    name: "operation",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (Num.operation === "Addition") {
  console.log(Num.firstNumber + Num.secondNumber);
} else if (Num.operation === "Subtraction") {
  console.log(Num.firstNumber - Num.secondNumber);
} else if (Num.operation === "Multiplication") {
  console.log(Num.firstNumber * Num.secondNumber);
} else if (Num.operation === "Division") {
  console.log(Num.firstNumber / Num.secondNumber);

  console.log("please select valid operator");
}

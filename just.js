"use strict";
// Math Functions
const calculator = {
    // Addition
    addition: (a, b) => {
        return a + b;
    },
    // Subtraction
    subtraction: (a, b) => {
        return a - b;
    },
    // Multiplication
    multiplication: (a, b) => {
        return a * b;
    },
    // Division
    division: (a, b) => {
        if (b === 0) {
            throw new Error("0 سے divide نہیں کر سکتے");
        }
        return a / b;
    },
    // Percentage
    percentage: (number, percent) => {
        return (number * percent) / 100;
    },
};
// Function Calls
console.log("Addition:", calculator.addition(20, 10));
console.log("Subtraction:", calculator.subtraction(20, 10));
console.log("Multiplication:", calculator.multiplication(20, 10));
console.log("Division:", calculator.division(20, 10));
console.log("Percentage:", calculator.percentage(1000, 20));

"use strict";

function calcSum(a, b) {
    return a + b;
}

function calcAdd(a, b) {
    return a * b;
}

function calcDiv(a, b) {
    return a / b;
}

function calcSub(a, b) {
    return a - b;
}

/**
 * Simple calc
 *
 * @param {number} arg1 - First value
 * @param {number} arg2 - Second value
 * @param {string} operation - Math operation
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "*":
            return calcAdd(arg1, arg2);
        case "+":
            return calcSum(arg1, arg2);
        case "-":
            return calcSub(arg1, arg2);
        case "/":
            return calcDiv(arg1, arg2);
    }
}

console.log(mathOperation(5, 2, "*"));
console.log(mathOperation(3, 2, "+"));
console.log(mathOperation(9, 1, "/"));
console.log(mathOperation(-3, 2, "-"));
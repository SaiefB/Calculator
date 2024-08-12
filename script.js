// Variables
const screen = document.querySelector(".screen");
const zero = document.querySelector(".zeroBtn");
const one = document.querySelector(".oneBtn");
const two = document.querySelector(".twoBtn");
const three = document.querySelector(".threeBtn");
const four = document.querySelector(".fourBtn");
const five = document.querySelector(".fiveBtn");
const six = document.querySelector(".sixBtn");
const seven = document.querySelector(".sevenBtn");
const eight = document.querySelector(".eightBtn");
const nine = document.querySelector(".nineBtn");

const decimal = document.querySelector(".decimalBtn");
const clear = document.querySelector(".clearBtn");

const plus = document.querySelector(".plusBtn");
const minus = document.querySelector(".minusBtn");
const multiply = document.querySelector(".multiplyBtn");
const divide = document.querySelector(".divideBtn");
const equal = document.querySelector(".equalBtn");

let primaryNum = "";
let secondaryNum = "";
let operator = null;
const displayValue = "";


//Operator Functions
const addition = function (a, b) {
    return a + b
};

const subtraction = function (a, b) {
    return a - b
};

const multiplication = function (a, b) {
    return a * b
};

const division = function (a, b) {
    return a / b
};

const operate = function (operator, num1, num2) {
    switch (operator) {
        case "+":
            return addition(num1, num2);
        case "-":
            return subtraction(num1, num2);
        case "*":
            return multiplication(num1, num2);
        case "/":
            return division(num1, num2);
        default:
            return null;
    }
};



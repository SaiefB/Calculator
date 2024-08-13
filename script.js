// Variables
const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".numBtn");

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

let isSecondNumber = false;
let storedOperator = null;

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

// function for when the equal is set up
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

// function to append numbers to the screen
const appendNumber = function (number) {
    if (screen.textContent === "0" || screen.textContent === "") {
        screen.textContent = number;
    } else {
        screen.textContent += number;
    };
    if (isSecondNumber === false) {
        primaryNum += number
    } else {
        secondaryNum += number
    }
    console.log("primaryNum: ",primaryNum)
    console.log("secondaryNum: ",secondaryNum)
}


// Number buttons Event listener
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        appendNumber(number);

    });
});

// Operator buttons Event Listeners
plus.addEventListener("click", () => {
    storedOperator = "+";
    console.log("Operator: ", storedOperator)
    isSecondNumber = true;
    console.log(isSecondNumber)
})

//clear screen function
clear.addEventListener("click", () => {
    screen.textContent = "";
    primaryNum = "";
    secondaryNum = "";
    console.log("primaryNum: ",primaryNum)
    console.log("secondaryNum: ",secondaryNum)
})

// Decimal Button function
decimal.addEventListener("click", () => {
    if (screen.textContent === "0" || screen.textContent === "") {
        screen.textContent = `0.`;
    } else {
        screen.textContent += `${number}.`
    }
})

// Equal function
equal.addEventListener("click", () => {
    let result = operate(storedOperator, primaryNum, secondaryNum)
    console.log(result)
})


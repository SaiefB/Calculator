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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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

    // If the second number is being input, clear the screen
    if (isSecondNumber && (screen.textContent === "+" || screen.textContent === "")) {
        screen.textContent = "";
    } else if (isSecondNumber && (screen.textContent === "-" || screen.textContent === "")) {
        screen.textContent = "";
    } else if (isSecondNumber && (screen.textContent === "x" || screen.textContent === "")) {
        screen.textContent = "";
    } else if (isSecondNumber && (screen.textContent === "/" || screen.textContent === "")) {
        screen.textContent = "";
    }

    // Display the current number
    if (screen.textContent === "0" || screen.textContent === "") {
        screen.textContent = number;
    } else {
        screen.textContent += number;
    };

    // Append the number to the appropriate variable
    if (!isSecondNumber) {
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
        console.log("number: ", number);
        if (secondaryNum === "") {
            screen.textContent = "";
            appendNumber(number);
        } else {
            screen.textContent = ""
            appendNumber(number)
            console.log("number: ", number);
        }
    });
});



// Operator buttons Event Listeners
plus.addEventListener("click", () => {
    if (isSecondNumber && secondaryNum !== "") {
        console.log("---if is initiated---")
        let result = operate(storedOperator, primaryNum, secondaryNum);
        console.log("let result: ", result)
        screen.textContent = result;
        primaryNum = result;
        console.log("primaryNum: ", primaryNum)
        secondaryNum = "";
        console.log("secondaryNum: ", secondaryNum)
    } else {
        screen.textContent = "";
        storedOperator = "+";
        console.log("Operator: ", storedOperator)
        isSecondNumber = true;
        console.log("isSecondNumber: ", isSecondNumber)
    }
})
minus.addEventListener("click", () => {
    if (isSecondNumber && secondaryNum !== "") {
        console.log("---if is initiated---")
        let result = operate(storedOperator, primaryNum, secondaryNum);
        console.log("let result: ", result)
        screen.textContent = result;
        primaryNum = result;
        console.log("primaryNum: ", primaryNum)
        secondaryNum = "";
        console.log("secondaryNum: ", secondaryNum)
    } else {
        screen.textContent = "";
        storedOperator = "-";
        console.log("Operator: ", storedOperator)
        isSecondNumber = true;
        console.log("isSecondNumber: ", isSecondNumber)
    }
})
multiply.addEventListener("click", () => {
    if (isSecondNumber && secondaryNum !== "") {
        console.log("---if is initiated---")
        let result = operate(storedOperator, primaryNum, secondaryNum);
        console.log("let result: ", result)
        screen.textContent = result;
        primaryNum = result;
        console.log("primaryNum: ", primaryNum)
        secondaryNum = "";
        console.log("secondaryNum: ", secondaryNum)
    } else {
        screen.textContent = "";
        storedOperator = "*";
        console.log("Operator: ", storedOperator)
        isSecondNumber = true;
        console.log("isSecondNumber: ", isSecondNumber)
    }
})
divide.addEventListener("click", () => {
    if (isSecondNumber && secondaryNum !== "") {
        console.log("---if is initiated---")
        let result = operate(storedOperator, primaryNum, secondaryNum);
        console.log("let result: ", result)
        screen.textContent = result;
        primaryNum = result;
        console.log("primaryNum: ", primaryNum)
        secondaryNum = "";
        console.log("secondaryNum: ", secondaryNum)
    } else {
        screen.textContent = "";
        storedOperator = "/";
        console.log("Operator: ", storedOperator)
        isSecondNumber = true;
        console.log("isSecondNumber: ", isSecondNumber)
    }
})



//clear screen function
clear.addEventListener("click", () => {
    screen.textContent = "";
    primaryNum = "";
    secondaryNum = "";
    storedOperator = null;
    isSecondNumber = false;
    console.log("primaryNum: ",primaryNum)
    console.log("secondaryNum: ",secondaryNum)
})



// Decimal Button function
decimal.addEventListener("click", () => {
    if (!screen.textContent.includes(".")) {
        screen.textContent += ".";
    }
});



// Equal function
equal.addEventListener("click", () => {
    if (primaryNum === "" && operator === null && secondaryNum === "") {
    screen.textContent = "ERROR"
    } else {

    
    let result = operate(storedOperator, primaryNum, secondaryNum)
    screen.textContent = result;
    console.log(result)
    primaryNum = result;
    secondaryNum = "";
    isSecondNumber = false;
    
    
    }
    
})


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

//Event listeners - numbers
one.addEventListener("click", () => {
    let number = screen.textContent = "1";
    screen.append(number)
})

two.addEventListener("click", () => {
    screen.textContent = "2";
})

//Event listeners - operators
plus.addEventListener("click", () => {
    screen.textContent = "+";
})
minus.addEventListener("click", () => {
    screen.textContent = "-";
})
multiply.addEventListener("click", () => {
    screen.textContent = "x";
})
divide.addEventListener("click", () => {
    screen.textContent = "/";
})

// when numbers clicked to appear on screen
// when operator clicked to appear on screen
// when equal clicked to compare conditions. if conditions met then execute operator function and display output.

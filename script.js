// assign variables and listen for input. Declare memory, input,
// current equation and result variables.
var input = "";
var memoryOne = "";
var operator = "";
var memoryTwo = "";
const equation = `${memoryOne}${operator}${memoryTwo}`; 
var result = "";

const btnClear = document.querySelector("#button-clear");
const btn1 = document.querySelector("#button-one");
const btn2 = document.querySelector("#button-two");
const btn3 = document.querySelector("#button-three");
const btn4 = document.querySelector("#button-four");
const btn5 = document.querySelector("#button-five");
const btn6 = document.querySelector("#button-six");
const btn7 = document.querySelector("#button-seven");
const btn8 = document.querySelector("#button-eight");
const btn9 = document.querySelector("#button-nine");
const btn0 = document.querySelector("#button-zero");
const btnDecimal = document.querySelector("#button-decimal");
const btnAdd = document.querySelector("#button-add");
const btnSubtract = document.querySelector("#button-subtract");
const btnMultiply = document.querySelector("#button-multiply");
const btnDivide = document.querySelector("#button-divide");
const btnEquals = document.querySelector("#button-equals");
const displayText = document.querySelector("#display-text");

displayText.textContent = input;

// script functions for each button

// if input is "clear" then clear all memory variables
function clearOut() {
    input = "";
    memoryOne = "";
    operator = "";
    memoryTwo = "";
    result = "";
};

btnClear.addEventListener("click", clearOut());

// if input is numbers or decimal, and no operators are present
// in current equation variable then concat it to first memory
// variable and display variable on output screen.

function numbersOrDecimal(num) {
    input += num;
    displayText.textContent = input;

};

btn0.addEventListener("click", numbersOrDecimal("0"));
btn1.addEventListener("click", numbersOrDecimal("1"));
btn2.addEventListener("click", numbersOrDecimal("2"));
btn3.addEventListener("click", numbersOrDecimal("3"));
btn4.addEventListener("click", numbersOrDecimal("4"));
btn5.addEventListener("click", numbersOrDecimal("5"));
btn6.addEventListener("click", numbersOrDecimal("6"));
btn7.addEventListener("click", numbersOrDecimal("7"));
btn8.addEventListener("click", numbersOrDecimal("8"));
btn9.addEventListener("click", numbersOrDecimal("9"));
btnDecimal.addEventListener("click", numbersOrDecimal("."));

// if input is operator, and second memory variable is empty, 
// store operator in operator variable. Then
// concat it to first memory variable as current equation variable
// and display on output screen.

// if input is operator, and second memory variable is not empty,
// then let result become first and second variables used with prior
// operator. Then copy result to first variable and assign operator
// variable to fresh operator input.

// if current equation variable contains an operator, any new numbers
// or decimal will go into second memory variable. 

function add() {
    if (memoryTwo === "") {
        operator = "+";
        memoryOne = input;
        input = "";
    } else {
        equals();
        operator = "+";
    };
};

btnAdd.addEventListener("click", add());

function subtract() {
    if (memoryTwo === "") {
        operator = "-";
        memoryOne = input;
        input = "";
    } else {
        equals();
        operator = "-";
    };
};

btnSubtract.addEventListener("click", subtract());

function multiply() {
    if (memoryTwo === "") {
        operator = "*";
        memoryOne = input;
        input = "";
    } else {
        equals();
        operator = "*";
    };
};

btnMultiply.addEventListener("click", multiply());

function divide() {
    if (memoryTwo === "") {
        operator = "/";
        memoryOne = input;
        input = "";
    } else {
        equals();
        operator = "/";
    };
};

btnDivide.addEventListener("click", divide());

// if equals is used then solve the equation and return the result.
// copy result to first memory variable and display result on output.
function equals() {
    if (operator === "+") {
        result = memoryOne + memoryTwo;
        memoryOne = result;
        memoryTwo = "";
        displayText.textContent = result;
    } else if (operator === "-") {
        result = memoryOne - memoryTwo;
        memoryOne = result;
        memoryTwo = "";
        displayText.textContent = result;
    } else if (operator === "*") {
        result = memoryOne * memoryTwo;
        memoryOne = result;
        memoryTwo = "";
        displayText.textContent = result;
    } else if (operator === "/") {
        result = memoryOne / memoryTwo;
        memoryOne = result;
        memoryTwo = "";
        displayText.textContent = result;
    } else {
        displayText.textContent = memoryOne;
    }
};




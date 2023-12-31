// assign variables and listen for input. Declare memory, input,
// current equation and result variables.

var input = "";
var memoryOne = "";
var currentOperator = "";
var memoryTwo = "";
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

const displayMemoryOne = document.querySelector("#display-memory-one");
const displayOperator = document.querySelector("#display-operator");
const displayMemoryTwo = document.querySelector("#display-memory-two");
const displayResult = document.querySelector("#display-result");
const html = document.querySelector("html");

const allBtns = document.querySelectorAll("button");

// Create a function to display results to the screen. This will
// be called after every action performed so it stays current.

function displayResults() {
    displayMemoryOne.textContent = memoryOne;
    displayOperator.textContent = currentOperator;
    displayMemoryTwo.textContent = memoryTwo;
    displayResult.textContent = result;
};

// if input is "clear" then clear all memory variables

function clearOut() {
    input = "";
    memoryOne = "";
    currentOperator = "";
    memoryTwo = "";
    result = "";
    displayResults();
};

btnClear.addEventListener("click", clearOut);

// if input is numbers or decimal, and no operators are present
// in current equation variable then concat it to first memory
// variable and display variable on output screen.

function numbersOrDecimal(num) {
    if (currentOperator === "") {
        memoryOne += num;
        displayResults();
    } else {
        memoryTwo += num;
        displayResults();
    };
};

btn0.addEventListener("click", () => numbersOrDecimal(0));
btn1.addEventListener("click", () => numbersOrDecimal(1));
btn2.addEventListener("click", () => numbersOrDecimal(2));
btn3.addEventListener("click", () => numbersOrDecimal(3));
btn4.addEventListener("click", () => numbersOrDecimal(4));
btn5.addEventListener("click", () => numbersOrDecimal(5));
btn6.addEventListener("click", () => numbersOrDecimal(6));
btn7.addEventListener("click", () => numbersOrDecimal(7));
btn8.addEventListener("click", () => numbersOrDecimal(8));
btn9.addEventListener("click", () => numbersOrDecimal(9));
btnDecimal.addEventListener("click", () => numbersOrDecimal("."));

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

// if equals is used then solve the equation and return the result.
// copy result to first memory variable and display result on output.

btnAdd.addEventListener("click", () => {operate("+");});
btnSubtract.addEventListener("click", () => {operate("-")});
btnMultiply.addEventListener("click", () => {operate("*");});
btnDivide.addEventListener("click", () => {operate("/");});
btnEquals.addEventListener("click", () => {operate("=")});

function operate(operator) {
    if (currentOperator === "") {
        currentOperator = operator;
        displayResults();
        return;
    };
    if (currentOperator === "+" && operator === "=") {
        result = +memoryOne + +memoryTwo;
        displayResults();
        return;
    } else if (currentOperator === "-" && operator === "=") {
        result = +memoryOne - +memoryTwo;
        displayResults();
        return;
    } else if (currentOperator === "*" && operator === "=") {
        result = +memoryOne * +memoryTwo;
        displayResults();
        return;
    } else if (currentOperator === "/" && operator === "=") {
        result = +memoryOne / +memoryTwo;
        displayResults();
        return;
    } else if (currentOperator === "+") {
        memoryOne = +memoryOne + +memoryTwo;
        memoryTwo = "";
        currentOperator = operator;
        displayResults();
        return;
    } else if (currentOperator === "-") {
        memoryOne = +memoryOne - +memoryTwo;
        memoryTwo = "";
        currentOperator = operator;
        displayResults();
        return;
    } else if (currentOperator === "*") {
        memoryOne = +memoryOne * +memoryTwo;
        memoryTwo = "";
        currentOperator = operator;
        displayResults();
        return;
    } else {
        memoryOne = +memoryOne / +memoryTwo;
        memoryTwo = "";
        currentOperator = operator;
        displayResults();
        return;
    }
};

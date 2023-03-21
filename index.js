const numBtns = document.querySelectorAll('.num-btn');
const funBtns = document.querySelectorAll('.fun-btn');
const equals = document.getElementById('equals');
const dot = document.getElementById('dot');
const clearScreen = document.getElementById('clear');
const output = document.getElementById('output');
const operation = document.getElementById('operation');

function operate(firstNumber, secondNumber, operator) {
    let result
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            return Math.round((result + Number.EPSILON) * 100000) / 100000;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            return Math.round((result + Number.EPSILON) * 100000) / 100000;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            return Math.round((result + Number.EPSILON) * 100000) / 100000;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            return Math.round((result + Number.EPSILON) * 100000) / 100000;
    }
}


let firstNumber = '';
let secondNumber = '';
let operator;

function evaluateNextStep(number) {
    if (!secondNumber && !operator) {
        firstNumber += number
        output.innerText = firstNumber;
    } else {
        secondNumber += number;
        output.innerText = secondNumber;
    }
};

function operatorLogic(op) {
    if (!firstNumber) {
        firstNumber = 0;
    }
    if (secondNumber) {
        firstNumber = operate(firstNumber, secondNumber, operator).toString();
        secondNumber = '';
        output.innerText = firstNumber;
    }
    operator = op;
    operation.innerText = op;
}


numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        evaluateNextStep(btn.id)
    })
})


funBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        operatorLogic(btn.id)
    })
})

equals.addEventListener('click', () => {
    if (!secondNumber) {
        output.innerText = firstNumber;
        operation.innerText = '='
    } else {
        firstNumber = operate(firstNumber, secondNumber, operator)
        secondNumber = '';
        output.innerText = firstNumber;
        operation.innerText = '=';
    }

});

dot.addEventListener('click', () => {
    if (firstNumber && !secondNumber && firstNumber.includes('.') == false) {
        firstNumber += '.';
        output.innerText = firstNumber;

    } else if (secondNumber && secondNumber.includes('.') == false) {
        console.log(secondNumber)
        secondNumber += '.';
        output.innerText = secondNumber;
    }
});

clearScreen.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    output.innerText = 0;
    operation.innerText = '';
    console.log(firstNumber, secondNumber, operator)
})


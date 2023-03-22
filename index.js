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

//evaluateNextStep decides what to do with a number once we enter it:
function evaluateNextStep(number) {
    if (!secondNumber && !operator) {
        firstNumber += number
        output.innerText = firstNumber;
    } else {
        secondNumber += number;
        output.innerText = secondNumber;
    }
};

//operatorLogic decides what to do with an operator once we enter it:
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

//Apply evaluateNextStep and operatorLogic to relevant buttons:
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

//Apply logic to equals button:

function equalsLogic() {
    if (!secondNumber) {
        output.innerText = firstNumber;
        operation.innerText = '='
    } else {
        firstNumber = operate(firstNumber, secondNumber, operator)
        secondNumber = '';
        output.innerText = firstNumber;
        operation.innerText = '=';
    }
}
equals.addEventListener('click', () => equalsLogic());

//Apply logic to dot button:

function dotLogic() {
    if (firstNumber && !secondNumber && firstNumber.includes('.') == false) {
        firstNumber += '.';
        output.innerText = firstNumber;

    } else if (secondNumber && secondNumber.includes('.') == false) {
        console.log(secondNumber)
        secondNumber += '.';
        output.innerText = secondNumber;
    }
}

dot.addEventListener('click', () => dotLogic());

//Reset everything when we press clear button:
clearScreen.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    output.innerText = 0;
    operation.innerText = '';
    console.log(firstNumber, secondNumber, operator)
});

//Handle key presses with keydown:
let numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let functionKeys = ['+', '-', '*', '/'];
window.addEventListener('keydown', (e) => {
    if (numberKeys.includes(e.key)) {
        evaluateNextStep(e.key);
    } else if (functionKeys.includes(e.key)) {
        operatorLogic(e.key);
    } else if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault()
        equalsLogic();
    } else if (e.key === '.') {
        dotLogic();
    }
});
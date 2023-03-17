let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let equals = document.getElementById('=');
let divide = document.getElementById('/');
let multiply = document.getElementById('*');
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let dot = document.getElementById('.');
let clearScreen = document.getElementById('clear');
let output = document.getElementById('output');

function operate(firstNumber, secondNumber, operator) {
    operatorEntered = false;
    switch (operator) {
        case '+':
            return parseFloat(firstNumber) + parseFloat(secondNumber);
        case '-':
            return parseFloat(firstNumber) - parseFloat(secondNumber);
        case '/':
            return parseFloat(firstNumber) / parseFloat(secondNumber);
        case '*':
            return parseFloat(firstNumber) * parseFloat(secondNumber);
    }
}


let firstNumber = ''
let secondNumber = ''
let operator
let operatorEntered = false;

function evaluateNextStep(number) {
    if (!operatorEntered) {
        firstNumber += number;
        output.innerText = firstNumber;

    } else {
        secondNumber += number;
        output.innerText = secondNumber;
    }
};

function operatorLogic(op) {
    if (operatorEntered) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = '';
        output.innerText = firstNumber;
    } else {
        operatorEntered = true;
    }
    operator = op;
}

let numberKey = [
    {
        name: one,
        value: 1
    },
    {
        name: two,
        value: 2
    },
    {
        name: three,
        value: 3
    },
    {
        name: four,
        value: 4
    },
    {
        name: five,
        value: 5
    },
    {
        name: six,
        value: 6
    },
    {
        name: seven,
        value: 7
    },
    {
        name: eight,
        value: 8
    },
    {
        name: nine,
        value: 9
    },
]

numberKey.forEach(number => {
    number['name'].addEventListener('click', ()=> {
        evaluateNextStep(number['value'])
    })
});

plus.addEventListener('click', () => {
    operatorLogic('+');

});
minus.addEventListener('click', () => {
    operatorLogic('-');
});
divide.addEventListener('click', () => {
    operatorLogic('/');
});
multiply.addEventListener('click', () => {
    operatorLogic('*');
});

equals.addEventListener('click', () => {
    firstNumber = operate(firstNumber, secondNumber, operator)
    secondNumber = '';
    output.innerText = firstNumber;
})


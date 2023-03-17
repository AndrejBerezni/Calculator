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
    {
        name: zero,
        value: 0
    }
];


function operate(firstNumber, secondNumber, operator) {
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
//Here you need to fix for consecutive calculations:
function evaluateNextStep(number) {
    if (!secondNumber && !operator) {
        firstNumber += number
        output.innerText = firstNumber;
        console.log(firstNumber, secondNumber, operator, '88')
    } else {
        secondNumber += number;
        output.innerText = secondNumber;
        console.log(firstNumber, secondNumber, operator, '92')
    }
};

function operatorLogic(op) {
    if (!firstNumber) {
        firstNumber = 0
        console.log(firstNumber, secondNumber, operator, '98');

    }
    if (secondNumber) {
        firstNumber = operate(firstNumber, secondNumber, operator).toString();
        secondNumber = '';
        output.innerText = firstNumber;
        operator = op;
        console.log(firstNumber, secondNumber, operator, '103')
    } else {
        operator = op;
        console.log(firstNumber, secondNumber, operator, '109')
    }
    operator = op;
}



numberKey.forEach(number => {
    number['name'].addEventListener('click', () => {
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
    if (!secondNumber) {
        output.innerText = firstNumber;
    } else {
        firstNumber = operate(firstNumber, secondNumber, operator)
        secondNumber = '';
        output.innerText = firstNumber;
    }

});

dot.addEventListener('click', () => {
    if (firstNumber && !secondNumber && firstNumber.includes('.') == false) {
        firstNumber += '.'

    } else if (secondNumber && secondNumber.includes('.') == false) {
        console.log(secondNumber)
        secondNumber += '.'
    }
});

clearScreen.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    output.innerText = 0;
    console.log(firstNumber, secondNumber, operator)
})


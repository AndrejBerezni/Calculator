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
let operation = document.getElementById('operation');

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


let firstNumber = ''
let secondNumber = ''
let operator
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



// numberKey.forEach(number => {
//     number['name'].addEventListener('click', () => {
//         evaluateNextStep(number['value'])
//     })
// });

const numBtns = document.querySelectorAll('.num-btn');
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        evaluateNextStep(btn.id)
    })
})

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


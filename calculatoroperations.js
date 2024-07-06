let displayElement = document.getElementById('display');
let currentInput = '';
let expression = '';

function appendNumber(number) {
    currentInput += number;
    expression += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    expression += ' ' + op + ' ';
    currentInput = '';
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        expression += '.';
        updateDisplay();
    }
}

function deleteLast() {
    if (currentInput !== '') {
        expression = expression.slice(0, -1);
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    expression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        currentInput = expression;
    } catch {
        expression = 'Error';
        currentInput = '';
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = expression;
}

var display = document.getElementById('display');
var buttons = Array.from(document.getElementsByTagName('button'));
var currentInput = '0';
var firstOperand = '';
var secondOperand = '';
var operator = '';
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.textContent;
        if (!value)
            return;
        if (value === 'C') {
            currentInput = '0';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            display.value = '0';
            return;
        }
        if (value === '=') {
            if (operator && firstOperand !== '' && currentInput !== '') {
                secondOperand = currentInput;
                var result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
                display.value = result.toString();
                currentInput = result.toString();
                firstOperand = '';
                operator = '';
                secondOperand = '';
            }
            return;
        }
        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
            return;
        }
        if (currentInput === '0') {
            currentInput = value;
        }
        else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});
function calculate(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return 0;
    }
}

const display = document.getElementById('display') as HTMLInputElement;
const buttons = Array.from(document.getElementsByTagName('button'));

let currentInput = '0';
let firstOperand = '';
let secondOperand = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!value) return;

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
        const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
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
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

function calculate(first: number, second: number, operator: string): number {
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

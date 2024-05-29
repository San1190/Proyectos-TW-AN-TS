import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../shared/titulo/titulo.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  standalone: true,
  imports: [TitleComponent]
})
export default class CalculadoraComponent implements OnInit {
  currentInput: string = '0';
  firstOperand: string = '';
  secondOperand: string = '';
  operator: string = '';

  constructor() {}

  ngOnInit() {}

  onButtonClick(value: string) {
    if (!value) return;

    if (value === 'C') {
      this.clear();
      return;
    }

    if (value === '=') {
      this.calculateResult();
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      this.setOperator(value);
      return;
    }

    this.appendNumber(value);
  }

  clear() {
    this.currentInput = '0';
    this.firstOperand = '';
    this.secondOperand = '';
    this.operator = '';
  }

  calculateResult() {
    if (this.operator && this.firstOperand !== '' && this.currentInput !== '') {
      this.secondOperand = this.currentInput;
      const result = this.calculate(parseFloat(this.firstOperand), parseFloat(this.secondOperand), this.operator);
      this.currentInput = result.toString();
      this.firstOperand = '';
      this.operator = '';
      this.secondOperand = '';
    }
  }

  setOperator(operator: string) {
    if (this.currentInput !== '') {
      this.firstOperand = this.currentInput;
      this.operator = operator;
      this.currentInput = '';
    }
  }

  appendNumber(value: string) {
    if (this.currentInput === '0') {
      this.currentInput = value;
    } else {
      this.currentInput += value;
    }
  }

  calculate(first: number, second: number, operator: string): number {
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
}

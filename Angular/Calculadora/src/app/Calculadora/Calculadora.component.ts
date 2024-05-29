import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service'; // Importa el servicio de registro
import RegistroComponent from '../Registro/Registro.component'; // Importa el componente de registro
import { TitleComponent } from '../shared/titulo/titulo.component';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  imports: [TitleComponent, RegistroComponent],
  standalone: true
})
export default class CalculadoraComponent implements OnInit {
  currentInput: string = '0';
  firstOperand: string = '';
  secondOperand: string = '';
  operator: string = '';

  constructor(private registroService: RegistroService) {} // Inyecta el servicio de registro

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


      this.registroService.registrarOperacion(`${this.firstOperand} ${this.operator} ${this.secondOperand} = ${result}`);
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  buttons: string[][] = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
  ];

  getNumber(value: string): void {
    if (this.waitForSecondNumber) {
      this.display = value;
      this.waitForSecondNumber = false;
    } else {
      this.display = this.display === '0' ? value : this.display + value;
    }
  }

  getOperation(operator: string): void {
    if (operator === 'C') {
      this.clear();
      return;
    }

    if (operator === '=') {
      this.calculate();
      return;
    }

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.display);
    } else if (this.operator) {
      const result = this.calculate();
      this.firstOperand = Number(result);
      this.display = String(result);
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
  }

  private calculate(): number {
    const a = this.firstOperand!;
    const b = Number(this.display);
    let result: number;

    switch (this.operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        return b;
    }

    this.clear();
    this.display = String(result);
    return result;
  }

  clear(): void {
    this.display = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}

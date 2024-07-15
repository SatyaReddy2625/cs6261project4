import { Component } from '@angular/core';
import { ResistorService } from '../resistor.service';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.css']
})
export class ResistorCalculatorComponent {
  colorNames = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white', 'gold', 'silver'];
  selectedColors = ['black', 'black', 'black', 'black', 'black'];
  resistance = '';
  tolerance = '';

  bands = ['Band 1', 'Band 2', 'Band 3', 'Multiplier', 'Tolerance'];

  constructor(private resistorService: ResistorService) {
    this.calculate();
  }

  calculate() {
    const result = this.resistorService.calculateResistance(this.selectedColors);
    this.resistance = result.resistance;
    this.tolerance = result.tolerance;
  }
}

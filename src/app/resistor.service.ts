import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistorService {

  private colorCodes = {
    black: { digit: 0, multiplier: 1 },
    brown: { digit: 1, multiplier: 10, tolerance: 1 },
    red: { digit: 2, multiplier: 100, tolerance: 2 },
    orange: { digit: 3, multiplier: 1000 },
    yellow: { digit: 4, multiplier: 10000 },
    green: { digit: 5, multiplier: 100000, tolerance: 0.5 },
    blue: { digit: 6, multiplier: 1000000, tolerance: 0.25 },
    violet: { digit: 7, multiplier: 10000000, tolerance: 0.1 },
    gray: { digit: 8, tolerance: 0.05 },
    white: { digit: 9 },
    gold: { multiplier: 0.1, tolerance: 5 },
    silver: { multiplier: 0.01, tolerance: 10 },
  };

  getColorCode(color: string) {
    return this.colorCodes[color];
  }

  calculateResistance(colors: string[]): { resistance: string, tolerance: string } {
    const [band1, band2, band3, multiplier, tolerance] = colors.map(color => this.getColorCode(color));
    const resistanceValue = (band1.digit * 10 + band2.digit) * multiplier.multiplier;
    const toleranceValue = tolerance ? `${tolerance.tolerance}%` : '';
    return {
      resistance: this.formatResistance(resistanceValue),
      tolerance: toleranceValue,
    };
  }

  private formatResistance(value: number): string {
    if (value >= 1000000) {
      return `${value / 1000000} MΩ`;
    } else if (value >= 1000) {
      return `${value / 1000} kΩ`;
    }
    return `${value} Ω`;
  }
}

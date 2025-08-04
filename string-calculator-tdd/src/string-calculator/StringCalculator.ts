export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    const { delimiter, numbersToProcess } = this.parseDelimiter(numbers);
    const numberArray = this.parseNumbers(numbersToProcess, delimiter);
    
    this.validateNoNegativeNumbers(numberArray);
    
    return this.sumNumbers(numberArray);
  }

  private parseDelimiter(numbers: string): { delimiter: RegExp; numbersToProcess: string } {
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter},\n]`);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
    
    return { delimiter, numbersToProcess };
  }

  private parseNumbers(numbers: string, delimiter: RegExp): number[] {
    return numbers.split(delimiter).map(num => parseInt(num));
  }

  private validateNoNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
  }

  private sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
} 
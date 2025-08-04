export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter},\n]`);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
    
    const numberArray = numbersToProcess.split(delimiter);
    
    // Check for negative numbers
    const negativeNumbers = numberArray
      .map(num => parseInt(num))
      .filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
    
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
} 
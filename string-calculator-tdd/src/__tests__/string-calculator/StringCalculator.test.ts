import { StringCalculator } from '../../string-calculator/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe('add', () => {
    it('should return 0 for empty string', () => {
      const result = calculator.add('');
      expect(result).toBe(0);
    });

    it('should return the number for single number', () => {
      const result = calculator.add('1');
      expect(result).toBe(1);
    });

    it('should return sum for two comma-separated numbers', () => {
      const result = calculator.add('1,5');
      expect(result).toBe(6);
    });

    it('should return sum for any amount of numbers', () => {
      const result = calculator.add('1,2,3,4,5');
      expect(result).toBe(15);
    });

    it('should handle new lines between numbers', () => {
      const result = calculator.add('1\n2,3');
      expect(result).toBe(6);
    });

    it('should support custom delimiters', () => {
      const result = calculator.add('//;\n1;2');
      expect(result).toBe(3);
    });
  });
}); 
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
  });
}); 
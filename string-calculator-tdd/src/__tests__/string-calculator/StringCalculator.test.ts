import { StringCalculator } from '../../src/string-calculator/StringCalculator';

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
  });
}); 
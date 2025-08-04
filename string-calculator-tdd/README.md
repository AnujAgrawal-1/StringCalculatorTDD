# String Calculator TDD Kata

This project demonstrates the implementation of the String Calculator kata using Test-Driven Development (TDD) principles in TypeScript.

## Overview

The String Calculator is a simple class that takes a string of numbers and returns their sum. It supports various input formats and includes comprehensive error handling.

## Features

- ✅ Empty string returns 0
- ✅ Single number returns the number
- ✅ Two comma-separated numbers return their sum
- ✅ Any amount of comma-separated numbers return their sum
- ✅ New lines between numbers are supported (instead of commas)
- ✅ Custom delimiters are supported (format: `//[delimiter]\n[numbers...]`)
- ✅ Negative numbers throw an exception with all negative numbers listed
- ✅ Comprehensive test coverage (100%)

## Examples

```typescript
const calculator = new StringCalculator();

// Basic functionality
calculator.add('');           // returns 0
calculator.add('1');          // returns 1
calculator.add('1,5');        // returns 6
calculator.add('1,2,3,4,5');  // returns 15

// New lines
calculator.add('1\n2,3');     // returns 6

// Custom delimiters
calculator.add('//;\n1;2');   // returns 3
calculator.add('//|\n1|2\n3'); // returns 6

// Error handling
calculator.add('1,-2,3');     // throws "negative numbers not allowed -2"
calculator.add('1,-2,-3,4');  // throws "negative numbers not allowed -2,-3"
```

## TDD Implementation Steps

This project was implemented following strict TDD principles with frequent commits showing the evolution of the code:

1. **Step 1**: Empty string returns 0
2. **Step 2**: Single number parsing
3. **Step 3**: Two comma-separated numbers
4. **Step 4**: Any amount of numbers
5. **Step 5**: New lines between numbers
6. **Step 6**: Custom delimiters
7. **Step 7**: Negative number validation
8. **Step 8**: Multiple negative numbers in exception
9. **Step 9**: Edge cases and refactoring

## Project Structure

```
string-calculator-tdd/
├── src/
│   └── string-calculator/
│       └── StringCalculator.ts
├── src/__tests__/
│   └── string-calculator/
│       └── StringCalculator.test.ts
├── jest.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd string-calculator-tdd
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

```bash
# Run all tests
npm run test:jest

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:jest -- --coverage
```

### Running the React App

```bash
npm start
```

## Test Coverage

The project achieves 100% test coverage on the StringCalculator class:

```
File                   | % Stmts | % Branch | % Funcs | % Lines
-----------------------|---------|----------|---------|---------
StringCalculator.ts    |     100 |      100 |     100 |     100
```

## TDD Principles Demonstrated

1. **Red-Green-Refactor Cycle**: Each feature was implemented following the TDD cycle
2. **Test First**: Tests were written before implementation
3. **Minimal Implementation**: Only the code necessary to make tests pass was written
4. **Frequent Commits**: Each step was committed to show the evolution
5. **Refactoring**: Code was refactored after tests passed to improve maintainability

## Key Learning Points

- **Incremental Development**: Building features step by step
- **Test Coverage**: Ensuring all code paths are tested
- **Error Handling**: Proper exception handling with meaningful messages
- **Code Organization**: Clean separation of concerns with private methods
- **Regular Expressions**: Using regex for flexible delimiter parsing

## Contributing

This is a kata project demonstrating TDD principles. Feel free to fork and experiment with different approaches or additional features.

## License

This project is open source and available under the [MIT License](LICENSE).

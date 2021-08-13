import { evensOnly, fiveAndGreaterOnly } from './codeChallenge2.js';

test('Five and greater only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = fiveAndGreaterOnly(input); // act
    expect(output).toEqual([6, 8]); // assert
  });

  test('return only even numbers', () => {
      const input = [3, 6, 8, 2];
      const output = evensOnly(input);
      expect(output).toEqual([6, 8, 2]);
  })

  
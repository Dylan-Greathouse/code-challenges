import { evensOnly, fiveAndGreaterOnly, fiveCharactersOrFewerOnly, ofAge, peopleWhoBelongToTheIlluminati } from './codeChallenge2.js';

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

  test('return wordss with five characters or less', () => {
      const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
      const output = fiveCharactersOrFewerOnly(input);
      expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']);
  })

  test('return people in illuminati', () => {
      const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
      ];
      const output = peopleWhoBelongToTheIlluminati(input);
      expect(output).toEqual([ 
        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 
    ]);
  })

  test('return people who are older than 18', () => {
      const input = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ];
    const output = ofAge(input);
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 } 
    ])
  })
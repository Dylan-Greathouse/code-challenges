import { alphabetical, byAge, evensOnly, fiveAndGreaterOnly, fiveCharactersOrFewerOnly, greatestToLeast, leastToGreatest, lengthSort, ofAge, peopleWhoBelongToTheIlluminati } from './codeChallenge2.js';


//filter tests
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

  //sort tests
test('sort numbers from small to large', () => {
    const input = [1, 3, 5, 2, 90, 20];
    const output = leastToGreatest(input);
    expect(output).toEqual([1, 2, 3, 5, 20, 90])
})

test('sort numbers from large to small', () => {
    const input = [1, 3, 5, 2, 90, 20];
    const output = greatestToLeast(input);
    expect(output).toEqual([90, 20, 5, 3, 2, 1]);
})

test('sort words from shortest to longest', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
    const output = lengthSort(input);
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
})

test('sort words alphabetically', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
    const output = alphabetical(input);
    expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
})

test('sort arr by age', () => {
    const input = [
        { name: 'Quiet Samurai', age: 22 },
        { name: 'Arrogant Ambassador', age: 100 },
        { name: 'Misunderstood Observer', age: 2 },
        { name: 'Unlucky Swami', age: 77 }
    ];
    const output = byAge(input);
    expect(output).toEqual([ 
        { name: 'Misunderstood Observer', age: 2 },
        { name: 'Quiet Samurai', age: 22 },
        { name: 'Unlucky Swami', age: 77 },
        { name: 'Arrogant Ambassador', age: 100 } 
    ]);
})
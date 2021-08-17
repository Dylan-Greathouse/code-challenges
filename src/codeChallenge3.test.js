import { capitalizeObjectKeys, getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys } from './codeChallenge3.js';

test('it capitalizes the keys', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
    const output = capitalizeObjectKeys(dataObject); //act
    expect(output).toEqual(['NAME', 'AGE']); //assert
  });

test('it sorts keys of object', () => {
    const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
    const output = sortedKeys(input);
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
})

test('it filters out age', () => {
    const input = { name: 'Angelina Jolie', isSpot: false, age: 80, };
    const output = getFilteredKey(input);
    expect(output).toEqual(['age']);
})

test('returns array of keys and values', () => {
    const input = { name: 'Angelina Jolie', age: 80 };
    const output = getArrayOfKeysAndValues(input);
    expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
})

test('returns sorted array by object values length', () => {
    const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
    const output = sortedArraysByValuesLength(input);
    expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
})
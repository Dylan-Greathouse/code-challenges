import { returnTen, findMax, totalSum } from './codeChallenge6';

test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

test('it should return the highest number in matrix', () => {
  const input = [[13,24,24,2], [2,5,6], [2,3]];
  const output = findMax(input);
  expect(output).toEqual(24);
})

test('it should return the sum in matrix', () => {
  const input = [[13,24,24,2], [2,5,6], [2,3]];
  const output = totalSum(input);
  expect(output).toEqual(81);
})
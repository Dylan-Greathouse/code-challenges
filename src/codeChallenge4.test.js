import { getHouses, totalCharacters, updateNumbers } from "./codeChallenge4.js";

test('it gets the names of the houses', () => {
    const characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      }
    ]; //arrange
    const output = getHouses(characters); //act
    expect(output).toEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow' ]); //assert
  });
  
  test('it updates numbers', () => {
      const input = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'}
      const output = updateNumbers(input);
      expect(output).toEqual(["Grace Hopper,222-303-5938", "Ada Lovelace,222-349-9842", "Alan Turing,222-853-5933",])
  })

  test('total number of characters', () => {
      const input = [
        {
          name: 'Eddard',
          spouse: 'Catelyn',
          children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
          house: 'Stark'
        },
        {
          name: 'Jon A.',
          spouse: 'Lysa',
          children: ['Robin'],
          house: 'Arryn'
        },
        {
          name: 'Cersei',
          spouse: 'Robert',
          children: ['Joffrey', 'Myrcella', 'Tommen'],
          house: 'Lannister'
        },
        {
          name: 'Daenarys',
          spouse: 'Khal Drogo',
          children: ['Drogon', 'Rhaegal', 'Viserion'],
          house: 'Targaryen'
        },
        {
          name: 'Mace',
          spouse: 'Alerie',
          children: ['Margaery', 'Loras'],
          house: 'Tyrell'
        },
        {
          name: 'Euron',
          spouse: null,
          children: [],
          house: 'Greyjoy'
        },
        {
          name: 'Jon S.',
          spouse: null,
          children: [],
          house: 'Snow'
        }
      ];

      const output = totalCharacters(input);
      expect(output).toEqual(26);
  })
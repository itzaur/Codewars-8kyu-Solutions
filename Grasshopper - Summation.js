/*
Description:
Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
const summation = function (num) {
  return [...Array(num + 1).keys()].reduce((acc, el) => acc + el);
  // return num * (num + 1) / 2
  // return [...Array(num)].reduce((acc, _, i) => acc + i + 1, 0)
  // return Array.from({length: num}, (_, i) => i + 1).reduce((acc, el) => acc + el)
  // return '*'.repeat(num).split``.reduce((acc, _, i) => acc + i + 1, 0)
  // return Array(num).fill('*').reduce((acc, _, i) => acc + i + 1, 0)
};

console.log(summation(1)); //1
console.log(summation(8)); //36

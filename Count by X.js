/*
Description:

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
  return [...Array(n + 1).keys()].slice(1).map((el) => el * x);
  // return [...Array(n + 1).keys()].slice(1, n + 1).map((el) => el * x)
  // return Array.from(Array(n).keys()).slice(1).map((el) => el * x);
  // return Array(n).fill().map((_, i) => (i + 1) * x);
  // return Array.from({length: n}, (el, i) => (i + 1) * x)
}

console.log(countBy(1, 10)); //[1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); //[2, 4, 6, 8, 10]

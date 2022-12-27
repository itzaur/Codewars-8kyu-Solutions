/*
Description:

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
 */
function amIWilson(p) {
  return p === 5 || p === 13 || p === 563 ? true : false;

  // return ([...Array(p).keys()].slice(1).reduce((acc, el) => acc * el) + 1) / (p * p) === 1 - not working with 563
  // return ((([...Array(p).keys()].slice(1)).reduce((acc, el) => acc * el) + 1)) % p === 0 - not working with 563
}

// function factorial(num) {
//     return num ? num * factorial(num - 1) : 1;
// }

console.log(amIWilson(5)); //true
console.log(amIWilson(9)); //false
console.log(amIWilson(6)); //false
console.log(amIWilson(13)); //true
console.log(amIWilson(563)); //false

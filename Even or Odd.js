/*
Description:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
  // return number % 2 ? "Odd" : "Even";
  // return number & 1 ? "Odd" : "Even"
  // return ["Even", "Odd"][number & 1]
}

console.log(evenOrOdd(2)); //"Even"
console.log(evenOrOdd(7)); //"Odd"
console.log(evenOrOdd(-42)); //"Even"
console.log(evenOrOdd(-7)); //"Odd"
console.log(evenOrOdd(0)); //"Even"

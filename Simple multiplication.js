/*
Description:

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
  // return (number % 2 ? 9 : 8) * number
}

console.log(simpleMultiplication(2), "Should return double given argument.."); //16
console.log(simpleMultiplication(1), "Should return double given argument.."); //9
console.log(
  simpleMultiplication(8),
  "Should return given argument times eight..."
); //64
console.log(
  simpleMultiplication(4),
  "Should return given argument times eight..."
); //32
console.log(
  simpleMultiplication(5),
  "Should return given argument times nine..."
); //45

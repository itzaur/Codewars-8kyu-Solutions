/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
Examples

numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/
function numberToPower(number, power) {
  return power > 0
    ? [...Array(power)].fill(number).reduce((acc, el) => acc * el)
    : 1;

  // return Array(power).fill(number).reduce((acc, el) => acc * el, 1);
}

console.log(numberToPower(4, 2)); //16
console.log(numberToPower(10, 4)); //10000
console.log(numberToPower(10, 0)); //1

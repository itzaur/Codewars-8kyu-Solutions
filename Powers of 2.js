/*
Description:

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
function powersOfTwo(n) {
  return Array.from(Array(n + 1).keys()).map((el) => 2 ** el);
  // return Array.from({length: n + 1}, (_, n) => 2 ** n)
  // return [...Array(n + 1)].map((_, i) => Math.pow(2, i))
  // return Array(n + 1).fill().map((el, i) => 2 ** i)
  // return Array(n + 1)
  //     .fill(2)
  //     .map((el, i) => el ** i);
  //   let arr = [];
  //   for (let i = 0; i <= n; i++) {
  //     // arr.push(2 ** i);
  //     arr.push(Math.pow(2, i))
  //   }
  //   return arr;

  //   let res = [];
  //   do {
  //     res.unshift(2 ** n);
  //   } while (n--);
  //   return res;
}

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); //[1, 2]
console.log(powersOfTwo(4)); //[1, 2, 4, 8, 16]

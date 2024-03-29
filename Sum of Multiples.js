/*
Description:
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
function sumMul(n, m) {
  let arr = [];
  let count = n;

  do {
    arr.push(n);
    n += count;
  } while (n < m);

  return m > 0 ? arr.reduce((acc, el) => acc + el, 0) : "INVALID";

  //   let sum = 0;
  //   for (let i = n; i < m; i += n) {
  //     sum += i;
  //   }
  //   return n >= m ? "INVALID" : sum;
}

console.log(sumMul(0, 0)); //"INVALID"
console.log(sumMul(2, 9)); //20
console.log(sumMul(4, -7)); //"INVALID"
console.log(sumMul(3, 13)); //30

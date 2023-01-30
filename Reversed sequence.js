/*
Description:

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/
const reverseSeq = (n) => {
  return Array.from({ length: n }, (el, i) => i + 1).reverse();

  // return Array(n).fill().map((_, i) => i + 1).reverse()

  //   return [...Array(n + 1).keys()].reverse().slice(0, -1);

  // return Array(n).fill().map((_, i) => n - i)

  // return Array.from({length: n}, (el, i) => n - i)

  // return Array.from({length: n}, () => n--)

  //   let arr = [];
  //   while (n > 0) {
  //     arr.push(n);
  //     n--;
  //   }
  //   return arr;

  // return n > 0 ? [n].concat(reverseSeq(n - 1)) : []
};

console.log(reverseSeq(5)); //[5, 4, 3, 2, 1]

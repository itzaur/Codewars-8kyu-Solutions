/*
Description:

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/
function monkeyCount(n) {
  return [...Array(n + 1).keys()].slice(1, n + 1);

  // return Array.from({length: n}, (_, i) => i + 1)

  //   let arr = [];
  //   for (let i = 1; i < n + 1; i++) {
  //     arr.push(i);
  //   }
  //   return arr;

  //   return [...Array(n).keys()].map((el) => el + 1);

  // return [...Array(n + 1).keys()].slice(1);

  //   return Array.from(Array(n), (_, i) => ++i);

  // return [...Array(n)].map((_, i) => ++i)

  // return n ? [...monkeyCount(n - 1), n] : []

  // return new Array(n).fill().map((_, i) => i + 1)
}

console.log(monkeyCount(5)); //[1, 2, 3, 4, 5]
console.log(monkeyCount(3)); //[1, 2, 3]
console.log(monkeyCount(9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(20)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

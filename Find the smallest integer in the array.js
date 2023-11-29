/*
DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const res = new SmallestIntegerFinder();

// function findSmallestInt(args) {
//   return args.reduce((acc, el) => {
//     if (acc > el) return el;
//     return acc;
//   });
// }
// const findSmallestInt = (args) => Math.min(...args);

console.log(res.findSmallestInt([78, 56, 232, 12, 8])); //8
console.log(res.findSmallestInt([78, 56, 232, 12, 18])); //12
console.log(res.findSmallestInt([78, 56, 232, 412, 228])); //56
console.log(res.findSmallestInt([78, 56, 232, 12, 0])); //0
console.log(res.findSmallestInt([1, 56, 232, 12, 8])); //1

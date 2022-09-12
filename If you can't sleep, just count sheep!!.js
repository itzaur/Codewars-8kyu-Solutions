/*
Description:

If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
const countSheep = function (num) {
  let arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i + " sheep...");
  }
  return arr.join("");
  //   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join``;

  //   return [...new Array(num)].reduce(
  //     (acc, _, i) => `${acc}${i + 1} sheep...`,
  //     ""
  //   );

  //   return [...Array(num).keys()].map((el) => el + 1 + " sheep...").join``;

  //   return num ? countSheep(num - 1) + num + " sheep..." : "";
};

console.log(countSheep(0)); //''
console.log(countSheep(1)); //"1 sheep..."
console.log(countSheep(2)); //"1 sheep...2 sheep..."
console.log(countSheep(3)); //"1 sheep...2 sheep...3 sheep..."

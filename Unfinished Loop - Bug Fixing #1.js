/*
Description:
Unfinished Loop - Bug Fixing #1

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/
function createArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;

  // return [...Array(number + 1).keys()].slice(1)

  // return Array(number).fill().map((_, i) => i + 1);

  // return Array.from({length: number}, (_, i) => i + 1)

  //   return Array(...Array(number)).map((_, i) => i + 1);
}

console.log(createArray(1)); //[1]
console.log(createArray(2)); //[1, 2]
console.log(createArray(3)); //[1, 2, 3]
console.log(createArray(4)); //[1, 2, 3, 4]
console.log(createArray(5)); //[1, 2, 3, 4, 5]

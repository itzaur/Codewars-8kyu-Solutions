/*
Description:

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
function stringy(size) {
  return [...Array(+size).keys()].reduce((acc, el, i, arr) => {
    i % 2 === 0 ? (arr[i] = 1) : (arr[i] = 0);
    return acc + arr[i];
  }, "");

  //   return "10".repeat(size).slice(0, size);

  // return "".padStart(size, "10");

  // return Array.from({ length: size }, (el, i) => (i + 1) & 1).join``;
}

console.log(stringy(3)); //'101'
console.log(stringy("4")); //'1010'
console.log(stringy("12")); //'101010101010'
console.log(stringy("")); //''
console.log(stringy(12)); //'101010101010'

/*
Description:

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/
function distinct(a) {
  return [...new Set(a)];
  // return a.filter((el, index) => a.indexOf(el) === index)
  //   return a.reduce((acc, el) => {
  //     return !acc.includes(el) ? [...acc, el] : acc;
  //   }, []);
}

console.log(distinct([1])); //[1]
console.log(distinct([1, 2])); //[1,2]
console.log(distinct([1, 1, 2])); //[1,2]

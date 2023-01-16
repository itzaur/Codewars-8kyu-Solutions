/*
Description:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  return arr.reduce((acc, el) => {
    return el > 0 ? acc + el : acc;
  }, 0);

  //   return arr.map((el) => el > 0 ? el : 0).reduce((acc, el) => acc + el, 0);

  //   return arr.filter((el) => el > 0).reduce((acc, el) => acc + el, 0);

  // return arr.reduce((acc, el) => acc + Math.max(el, 0), 0)
}

console.log(positiveSum([1, 2, 3, 4, 5])); //15
console.log(positiveSum([1, -2, 3, 4, 5])); //13
console.log(positiveSum([])); //0
console.log(positiveSum([-1, -2, -3, -4, -5])); //0
console.log(positiveSum([-1, 2, 3, 4, -5])); //9

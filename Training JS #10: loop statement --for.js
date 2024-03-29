/*
Description:

The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
*/
function pickIt(arr) {
  let odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }

  //   for (const el of arr) {
  //     (el % 2 ? odd : even).push(el);
  //   }

  return [odd, even];
}

console.log(pickIt([1, 2])); //[[1], [2]]
console.log(pickIt([1, 2, 3])); //[[1, 3], [2]]
console.log(pickIt([3, 2, 1])); //[[3, 1], [2]]
console.log(pickIt([10, 20, 30])); //[[], [10, 20, 30]]
console.log(pickIt([11, 21, 31])); //[[11, 21, 31], []]
console.log(pickIt([8, 1, 5, 4, 6, 1, 1])); //[[1, 5, 1, 1], [8, 4, 6]]

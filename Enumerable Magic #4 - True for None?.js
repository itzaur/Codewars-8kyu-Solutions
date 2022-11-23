/*
Description:

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/
function none(arr, fun) {
  return arr.map((el) => fun(el)).includes(true) ? false : true;

  // return !arr.some(fun)

  // return !arr.reduce((acc, el) => {
  //   return acc || fun(el);
  // }, false);

  // return arr.filter(fun).length === 0
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  })
); //true
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  })
); //false

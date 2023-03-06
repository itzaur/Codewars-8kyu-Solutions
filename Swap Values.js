/*
DESCRIPTION:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/
function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;

  // return arr.reverse()

  // const first = arr.shift()
  // arr.push(first)
  // return arr
}

console.log(swapValues([1, 2]));
console.log(swapValues([100, 28]));

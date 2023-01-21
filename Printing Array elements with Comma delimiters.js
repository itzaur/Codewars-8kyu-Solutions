/*
Description:

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/
function printArray(array) {
  return String(array);

  // return array.toString()

  // return array.join()

  // return array + ""
}

console.log(printArray([2, 4, 5, 2])); //"2,4,5,2"
console.log(printArray(["h", "o", "l", "a"])); //"h,o,l,a"

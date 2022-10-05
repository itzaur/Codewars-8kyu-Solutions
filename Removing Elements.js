/*
Description:

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
  return arr.filter((el, i) => (i % 2 === 0 ? el : null));
  //   return arr.filter((_, i) => !(i % 2));
  //   return arr.filter((_, i) => !(i & 1));
  //   for (let i = 1; i < arr.length; i++) {
  //     arr.splice(i, 1);
  //   }
  //   return arr;

  //   arr.forEach((_, i) => {
  //     arr.splice(i + 1, 1);
  //   });
  //   return arr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); //["Hello","Hello Again"]
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9]
console.log(removeEveryOther([[1, 2]])); //[[1, 2]]
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }])); //[["Goodbye"]]

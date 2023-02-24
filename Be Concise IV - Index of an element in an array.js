/*
Description:
Be Concise IV - Index of an element in an array
Task

Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
*/
const find = (array, element) =>
  array.indexOf(element) < 0 ? "Not found" : array.indexOf(element);

console.log(find([2, 3, 5, 7, 11], 5)); //2
console.log(find([2, 3, 5, 7, 11], 11)); //4
console.log(find([2, 3, 5, 7, 11], 3)); //1
console.log(find([2, 3, 5, 7, 11], 2)); //0
console.log(find([2, 3, 5, 7, 11], 7)); //3
console.log(find([2, 3, 5, 7, 11], 1)); //"Not found"
console.log(find([2, 3, 5, 7, 11], 8)); //"Not found"

console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Hello World")
); //1
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "lorem ipsum")
); //"Not found"
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Lorem Ipsum")
); //3
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], false)
); //2
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], true)
); //0
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], Math.PI)
); //5
console.log(
  find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], 3.14)
); //"Not found"
console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], 6)); //4

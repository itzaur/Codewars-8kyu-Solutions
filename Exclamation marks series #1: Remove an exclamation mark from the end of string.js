/*
Description:
Description:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/
function remove(string) {
  return string.slice(-1) !== "!" ? string : string.slice(0, -1);
  // return string.endsWith("!") ? string.slice(0, -1) : string
  // return string.at(-1) !== "!" ? string : string.slice(0, -1);
  // return string.replace(/!$/, "")
}

console.log(remove("Hi!")); //"Hi"
console.log(remove("Hi!!!")); //"Hi!!"
console.log(remove("!Hi")); //"!Hi"
console.log(remove("!Hi!")); //"!Hi"
console.log(remove("Hi! Hi!")); //"Hi! Hi"
console.log(remove("Hi")); //"Hi"

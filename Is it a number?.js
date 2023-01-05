/*
Description:

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/
function isDigit(s) {
  return s == parseFloat(s);

  // return parseFloat(s) == +s

  // return s / s == 1 || s == "-0" || s == "0.0"
}

console.log(isDigit("s2324")); //false
console.log(isDigit(-234.4)); //true
console.log(isDigit(5)); //true
console.log(isDigit(NaN)); //true
// console.log(isDigit(null)); //true

console.log(isDigit("3"));
console.log(isDigit("  3  "));
console.log(isDigit("-3.23"));

console.log(isDigit("3-4"));
console.log(isDigit("  3   5"));
console.log(isDigit("3 5"));
console.log(isDigit("zero"));

console.log(isDigit("-3."));
console.log(isDigit("50."));

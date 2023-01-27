/*
Description:

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/
function getNumberFromString(s) {
  return +s.match(/[0-9]/g).join``;

  // return +s.replace(/\D+/g, "")

  // return +[...s].filter(el => el >= "0" && el < "9").join``

  // return +[...s].filter(el => !isNaN(el)).join``
}

console.log(typeof +"5");

console.log(getNumberFromString("1")); //1
console.log(getNumberFromString("123")); //123
console.log(getNumberFromString("this is number: 7")); //7

/*
Description:

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata
*/
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");

  //   return [...string].map(el => el === el.toLowerCase() ? el.replace(el.match(/[aeiuo]/g), "") : el).join``;

  //   return [...string].filter((el) => ["a", "e", "i", "o", "u"].indexOf(el) == -1)
  //     .join``;

  //   return [...string].filter((el) => !"aeiou".includes(el)).join``;

  //   return string.split(/[aeiou]/).join``;
}

console.log(shortcut("hello")); //"hll"
console.log(shortcut("how are you today?")); //"hw r y tdy?"
console.log(shortcut("complain")); //"cmpln"
console.log(shortcut("never")); //"nvr"
console.log(shortcut("HELLO")); //"HELLO"

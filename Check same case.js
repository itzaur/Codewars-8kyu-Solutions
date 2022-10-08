/*
Description:

Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
function sameCase(a, b) {
  return !a.match(/[a-zA-Z]/g) || !b.match(/[a-zA-Z]/g)
    ? -1
    : (a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())
    ? 1
    : 0;

  //   return /[^a-z]/i.test(a + b)
  //     ? -1
  //     : (a === a.toLowerCase()) ^ (b === b.toUpperCase());

  //   if (
  //     [a, b].every((el) => /[a-z]/.test(el)) ||
  //     [a, b].every((el) => /[A-Z]/.test(el))
  //   ) {
  //     return 1;
  //   }
  //   return [a, b].every((el) => /[a-z]/i.test(el)) ? 0 : -1
}

console.log(sameCase("C", "B")); //1
console.log(sameCase("b", "a")); //1
console.log(sameCase("d", "d")); //1
console.log(sameCase("A", "s")); //0
console.log(sameCase("c", "B")); //0
console.log(sameCase("b", "Z")); //0
console.log(sameCase("\t", "Z")); //-1
console.log(sameCase("H", ":")); //-1

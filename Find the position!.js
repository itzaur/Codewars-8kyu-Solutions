/*
Description:

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/
function position(letter) {
  return `Position of alphabet: ${
    [...Array(26).keys()]
      .map((el, i) => (i + 10).toString(36))
      .indexOf(letter) + 1
  }`;

  // return `Position of alphabet: ${letter.charCodeAt() - 96}`

  // return `Position of alphabet: ${parseInt(letter, 36) - 9}`
}

console.log(position("a")); //1
console.log(position("z")); //26
console.log(position("e")); //5

/*
Description:

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/
function uniTotal(string) {
  return [...string]
    .map((el) => el.charCodeAt())
    .reduce((acc, el) => acc + el, 0);

  // return [...string].reduce((acc, el) => acc + el.charCodeAt(), 0)

  // return [...string].reduce((acc, el) => acc + el.codePointAt(), 0)
}

console.log(uniTotal("")); //0
console.log(uniTotal("a")); //97
console.log(uniTotal("b")); //98
console.log(uniTotal("c")); //99
console.log(uniTotal("d")); //100
console.log(uniTotal("e")); //101
console.log(uniTotal("aaa")); //291
console.log(uniTotal("Mary Had A Little Lamb")); //1873

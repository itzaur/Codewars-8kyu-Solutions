/*
Description:

Write a function that checks if a given string (case insensitive) is a palindrome.
*/
function isPalindrome(x) {
  return [...x.toLowerCase()].reverse().join`` == [...x.toLowerCase()].join``;
  //   return x.toLowerCase() === x.split``.reverse().join``.toLowerCase();

  //   let result = "";
  //   for (let i in x) {

  //     result = x[i] + result;
  //     console.log(result);
  //   }
  //   return result.toLowerCase() == x.toLowerCase();

  // let result = "";
  // for(let i of x) {
  //     result = i + result;
  // }

  // return result.toLowerCase() == x.toLowerCase()

  // return [...x.toLowerCase()].reverse().join``.includes(x.toLowerCase())

  //   return [...x.toLowerCase()].reduce((acc, el, i, arr) => {
  //     return acc && el === arr[arr.length - 1 - i];
  //   }, true);
}

console.log(isPalindrome("a")); //true
console.log(isPalindrome("aba")); //true
console.log(isPalindrome("Abba")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("Bob")); //true
console.log(isPalindrome("Madam")); //true
console.log(isPalindrome("AbBa")); //true
console.log(isPalindrome("")); //true

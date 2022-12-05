/*
Description:
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]
*/
function digitize(n) {
  return (n + "").split``.reverse().map((el) => +el);
  // return Array.from(String(n), Number).reverse``
  // return String(n).split``.map(Number).reverse``
  // return [...String(n)].map(Number).reverse``
}

console.log(digitize(35231)); //[1,3,2,5,3]
console.log(digitize(0)); //[0]

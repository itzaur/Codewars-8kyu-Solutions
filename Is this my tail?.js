/*
Description:

Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/
function correctTail(body, tail) {
  //   let sub = body.substr(body.length - tail.length);

  //   if ((sub = tail)) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return [...body].pop() === tail;

  //   return body[body.length - 1] === tail

  //   return body.endsWith(tail);

  // return body.slice(-1) === tail;

  // return [...body].reverse()[0] === tail

  // return body.at(-1) === tail
}

console.log(correctTail("Fox", "x")); //true
console.log(correctTail("Rhino", "o")); //true
console.log(correctTail("Meerkat", "t")); //true

/*
Description:

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/
function nextItem(xs, item) {
  let isValid = false;
  let result;

  for (const element of xs) {
    if (isValid) {
      result = element;
      break;
    }

    if (element === item) isValid = true;
  }

  return result;

  // let isValid = false;
  // for(const el of xs) {
  //   if(isValid) return el;
  //   if(el === item) isValid = true
  // }

  // let isValid = false;
  // for(const el of xs) {
  //   if(isValid) return el;
  //   isValid = el === item
  // }

  // let arr = [];
  // for(let el of xs) {
  //   if(arr.length) return el
  //   if(el === item) arr.push(el)
  // }
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); //6
console.log(nextItem(["a", "b", "c"], "d")); //undefined
console.log(nextItem(["a", "b", "c"], "c")); //undefined
console.log(nextItem("testing", "t")); //"e"

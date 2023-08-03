/*
DESCRIPTION:
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/
function remove(s, n) {
  return s.replace(/!/g, (result) => {
    if (n > 0) {
      n--;
      return '';
    }

    return result;
  });

  //   for (let i = 0; i < n; i++) {
  //     s = s.replace('!', '');
  //   }

  //   return s;

  //   return n > 0 ? remove(s.replace('!', ''), n - 1) : s;

  //   while (n) {
  //     s = s.replace('!', '');
  //     n--;
  //   }
  //   return s;

  //   return s.replace(/!/g, (c) => (n-- > 0 ? '' : c));
}

console.log(remove('Hi!', 1)); //'Hi'
console.log(remove('Hi!', 100)); //'Hi'
console.log(remove('Hi!!!', 1)); //'Hi!!'
console.log(remove('Hi!!!', 100)); //'Hi'
console.log(remove('!Hi', 1)); //'Hi'
console.log(remove('!Hi!', 1)); //'Hi!'
console.log(remove('!Hi!', 100)); //'Hi'
console.log(remove('!!!Hi !!hi!!! !hi', 1)); //'!!Hi !!hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 3)); //'Hi !!hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 5)); //'Hi hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 100)); //'Hi hi hi'

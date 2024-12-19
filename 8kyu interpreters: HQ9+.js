/*
Description:
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
For everything else, don't return anything (return null in C#, None in Rust, and "" in Haskell).
(+ has no visible effects so we can safely ignore it.)
*/
function HQ9(code) {
  let result = '';

  for (let i = 99; i > 0; i--) {
    result += `${i} bottle${
      i === 1 ? '' : 's'
    } of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.
Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${
      i - 1 === 1 ? '' : 's'
    } of beer on the wall.
`;
  }

  switch (true) {
    case code === 'H':
      return 'Hello World!';
    case code === 'Q':
      return 'Q';
    case +code === 9:
      return (
        result +
        `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
    default:
      return undefined;
  }
}

console.log(HQ9('H')); //'Hello World!'
console.log(HQ9('Q')); //'Q'
console.log(HQ9('X')); //undefined
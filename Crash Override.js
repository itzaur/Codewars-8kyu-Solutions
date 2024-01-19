/*
DESCRIPTION:

Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
*/
function aliasGen(a, b) {
  const name = a[0].toUpperCase();
  const secondName = b[0].toUpperCase();
  const str = 'Your name must start with a letter from A - Z.';

  if (!name.match(/^[a-z]/gi) || !secondName.match(/^[a-z]/gi)) {
    return str;
  }

  return `${firstName[name]} ${surname[secondName]}`;
}

var firstName = { A: 'Alpha', B: 'Beta', C: 'Cache', Z: 'Zoe', K: 'Konnor' };
var surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst', J: 'Joe', R: 'Roy' };

console.log(aliasGen('konnor', 'Bob')); //"Konnor Bomb"
console.log(aliasGen('7393424', 'Anumbha')); //"Your name must start with a letter from A - Z."
console.log(aliasGen('Anuddanumbha', '23200')); //"Your name must start with a letter from A - Z."

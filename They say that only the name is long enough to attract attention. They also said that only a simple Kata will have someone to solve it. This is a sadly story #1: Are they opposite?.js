/*
DESCRIPTION:
Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false
*/
function isOpposite(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return false;
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) return false;

      if (s1[i].toLowerCase() === s2[j] || s1[i].toUpperCase() === s2[j])
        return true;
    }
  }

  // return s1.split('')
  //   .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
  //   .join('') === s2 && s1 !== '';
}

console.log(isOpposite('ab', 'AB')); //true
console.log(isOpposite('aB', 'Ab')); //true
console.log(isOpposite('aBcd', 'AbCD')); //true
console.log(isOpposite('aBcde', 'AbCD')); //false
console.log(isOpposite('AB', 'Ab')); //false
console.log(isOpposite('', '')); //false

/*
DESCRIPTION:
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/
function validateHello(greeting) {
  const greetings = {
    english: "hello",
    italian: "ciao",
    french: "salut",
    german: "hallo",
    spanish: "hola",
    czech_republic: "ahoj",
    polish: "czesc",
  };

  return Object.values(greetings).some((el) =>
    greeting.toLowerCase().includes(el)
  );

  // return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greeting)
}

console.log(validateHello("ahoj")); //true
console.log(validateHello("meh")); //false
console.log(
  validateHello(
    "DoIng trES, ARe HoMBre; TSChUsS: paSa? wie hoMBRE? HALLO vISTa: are. paSA!"
  )
); //true
console.log(validateHello("HoLa! dOiNG you tREs WIE")); //true

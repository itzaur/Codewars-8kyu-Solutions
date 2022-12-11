/*
Description:

Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

    each noun containing less than 2 vowels has the article "das"
    each noun containing 2/3 vowels has the article "die"
    each noun containing more than 3 vowels has the article "der"

Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/
function derDieDas(wort) {
  const match = wort.match(/[a e i o u ä ö ü]/gi);
  return match == null
    ? `das ${wort}`
    : match.length > 3
    ? `der ${wort}`
    : match.length >= 2
    ? `die ${wort}`
    : match.length > 0
    ? `das ${wort}`
    : null;

  //   const match = (wort.match(/[aeiouäöü]/gi) || []).length;
  //   return `${match > 3 ? "der" : match >= 2 ? "die" : "das"} ${wort}`;
}

console.log(derDieDas("OOOpa")); //'der OOOpa'
console.log(derDieDas("Suppenhuhn")); //'die Suppenhuhn'
console.log(derDieDas("Geheimdienst")); //'der Geheimdienst'
console.log(derDieDas("Ofenkartoffel")); //'der Ofenkartoffel'
console.log(derDieDas("Fisch")); //'das Fisch'
console.log(derDieDas("Knödel")); //'die Knödel'
console.log(derDieDas("Leberkaassemmi")); //'der Leberkaassemmi'
console.log(derDieDas("L")); //'das L'
console.log(derDieDas("Qk")); //'das Qk'
console.log(derDieDas("zf")); //'das zf'

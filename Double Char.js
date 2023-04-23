/*
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
function doubleChar(str) {
    return [...str].map((el) => el.repeat(2)).join("");

    // return str.replace(/(.)/g, "$1$1")

    // return str.replace(/./g, '$&$&');

    // return [...str].map(el => el + el).join('');
}

console.log(doubleChar("abcd")); //"aabbccdd"
console.log(doubleChar("Adidas")); //"AAddiiddaass"
console.log(doubleChar("1337")); //"11333377"
console.log(doubleChar("illuminati")); //"iilllluummiinnaattii"
console.log(doubleChar("123456")); //"112233445566"
console.log(doubleChar("%^&*(")); //"%%^^&&**(("
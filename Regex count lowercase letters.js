/*
Description:

Your task is simply to count the total number of lowercase letters in a string.
Examples

lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/
function lowercaseCount(str) {
    const result = str.match(/[a-z]/g) || 0;
    return  result.length || 0;

    // return (str.match(/[a-z]/g) || []).length
    // return str.replace(/[^a-z]/g, "").length;

    // let check = str.match(/[a-z]/g);
    // return check ? check.length : 0
}

console.log(lowercaseCount("abc")); //3
console.log(lowercaseCount("abcABC123")); //3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); //3
console.log(lowercaseCount("")); //0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); //0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); //26
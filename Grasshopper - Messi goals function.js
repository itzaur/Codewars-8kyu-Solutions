/*
Description:
Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
function goals(...arguments) {
  return arguments.reduce((acc, el) => acc + el);
}

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   //   let [a, b, c] = [...arguments];
//   //   return a + b + c;

//   return [...arguments].reduce((acc, el) => acc + el);

//   //   return [].reduce.call(arguments, (acc, el) => acc + el);
// }

console.log(goals(0, 0, 0)); //0
console.log(goals(43, 10, 5)); //58

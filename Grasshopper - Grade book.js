/*
Description:
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade(...args) {
  const average = args.reduce((acc, el) => acc + el) / args.length;
  return average < 60
    ? "F"
    : average < 70
    ? "D"
    : average < 80
    ? "C"
    : average < 90
    ? "B"
    : "A";

  //   return average >= 90
  //     ? "A"
  //     : average >= 80
  //     ? "B"
  //     : average >= 70
  //     ? "C"
  //     : average >= 60
  //     ? "D"
  //     : "F";

  //   const letterGrades = [
  //     { min: 90, letter: "A" },
  //     { min: 80, letter: "B" },
  //     { min: 70, letter: "C" },
  //     { min: 60, letter: "D" },
  //     { min: 00, letter: "F" },
  //   ];

  //   //   return letterGrades.find((grade) => grade.min <= average).letter;
  //   for (const letter of letterGrades) {
  //     if (letter.min <= average) return letter.letter;
  //   }
  //   return "A";
}

console.log(getGrade(95, 90, 93)); //'A'
console.log(getGrade(100, 85, 96)); //'A'
console.log(getGrade(92, 93, 94)); //'A'
console.log(getGrade(70, 70, 100)); //"B"
console.log(getGrade(82, 85, 87)); //"B"
console.log(getGrade(84, 79, 85)); //"B"
console.log(getGrade(89, 89, 90)); //"B"
console.log(getGrade(70, 70, 70)); //"C"
console.log(getGrade(75, 70, 79)); //"C"
console.log(getGrade(60, 82, 76)); //"C"
console.log(getGrade(65, 70, 59)); //"D"
console.log(getGrade(66, 62, 68)); //"D"
console.log(getGrade(58, 62, 70)); //"D"
console.log(getGrade(44, 55, 52)); //"F"
console.log(getGrade(48, 55, 52)); //"F"
console.log(getGrade(58, 59, 60)); //"F"

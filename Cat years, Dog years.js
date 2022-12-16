/*

Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/
const humanYearsCatYearsDogYears = function (humanYears) {
  const years = Array(humanYears)
    .fill()
    .map((_, i) => ++i);

  const catYears = years
    .reduce((acc, el) => {
      if (el < 2) return [...acc, el * 15];
      if (el < 3) return [...acc, 9];
      return [...acc, 4];
    }, [])
    .reduce((acc, el) => acc + el);

  const dogYears = years
    .reduce((acc, el) => {
      if (el < 2) return [...acc, el * 15];
      if (el < 3) return [...acc, 9];
      return [...acc, 5];
    }, [])
    .reduce((acc, el) => acc + el);

  return [humanYears, catYears, dogYears];

  //   return humanYears < 2
  //     ? [humanYears, humanYears * 15, humanYears * 15]
  //     : humanYears < 3
  //     ? [humanYears, 24, 24]
  //     : [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];

  //   let catYears = 0;
  //   let dogYears = 0;

  //   const catAfter3Years = Array(humanYears).fill(4);
  //   const dogAfter3Years = Array(humanYears).fill(5);

  //   const catRules = [15, 9, ...catAfter3Years];
  //   const dogRules = [15, 9, ...dogAfter3Years];

  //   for (let i = 0; i < humanYears; i++) {
  //     catYears += catRules[i];
  //     dogYears += dogRules[i];
  //   }

  //   return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1)); //[1,15,15]
console.log(humanYearsCatYearsDogYears(2)); //[2,24,24]
console.log(humanYearsCatYearsDogYears(10)); //[10,56,64]

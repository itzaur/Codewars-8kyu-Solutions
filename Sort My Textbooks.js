/*
DESCRIPTION:
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/
function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a == b) return 0;
    if (a > b) return 1;

    return -1;
  });
}

console.log(sorter(['Algebra', 'History', 'Geometry', 'English'])); //['Algebra', 'English', 'Geometry', 'History']
console.log(sorter(['Algebra', 'history', 'Geometry', 'english'])); //['Algebra', 'english', 'Geometry', 'history']
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english'])); //['$istory', '**english', 'Alg#bra', 'Geom^try']

/*
DESCRIPTION:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range
−
50
⩽
�
,
�
⩽
50
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/
function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);

  //   return Math.hypot(a.x - b.x, a.y - b.y);
}

console.log(distanceBetweenPoints({ x: 3, y: 3 }, { x: 3, y: 3 })); //0
console.log(distanceBetweenPoints({ x: 1, y: 6 }, { x: 4, y: 2 })); //5
// console.log(
//   distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6)
// ); //10.728001

/*
Description:
Task
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4
Reference
QuadrantsQuadrants
There are four quadrants:

First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
More on quadrants: Quadrant (plane geometry) - Wikipedia

Task Series
Quadrants (this kata)
Quadrants 2: Segments
*/
function quadrant(x, y) {
  switch (true) {
    case x > 0 && y > 0:
      return 1;
    case x > 0 && y < 0:
      return 4;
    case x < 0 && y > 0:
      return 2;
    default:
      return 3;
  }
  ////////////////////////////!SECTION
  //   return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

console.log(quadrant(1, 2)); //1
console.log(quadrant(3, 5)); //1
console.log(quadrant(-10, 100)); //2
console.log(quadrant(-1, -9)); //3
console.log(quadrant(19, -56)); //4

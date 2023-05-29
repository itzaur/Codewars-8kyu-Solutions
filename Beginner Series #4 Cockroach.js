/*
Description:

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/
function cockroachSpeed(s) {
  const SECONDS_IN_HOUR = 3600;
  const KILOMETERS_IN_CENTIMETERS = 100_000;

  return Math.floor((s * KILOMETERS_IN_CENTIMETERS) / SECONDS_IN_HOUR);
}

console.log(cockroachSpeed(1.08)); //30
console.log(cockroachSpeed(1.09)); //30
console.log(cockroachSpeed(0)); //0

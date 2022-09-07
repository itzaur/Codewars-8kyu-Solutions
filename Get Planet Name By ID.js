/*
Description:

The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

// function getPlanetName(id) {
//   let name;
//   switch (id) {
//     case 1:
//       name = "Mercury";
//       break;
//     case 2:
//       name = "Venus";
//       break;
//     case 3:
//       name = "Earth";
//       break;
//     case 4:
//       name = "Mars";
//       break;
//     case 5:
//       name = "Jupiter";
//       break;
//     case 6:
//       name = "Saturn";
//       break;
//     case 7:
//       name = "Uranus";
//       break;
//     case 8:
//       name = "Neptune";
//       break;
//   }

//   return name;
// }

const planets = {
  1: "Mercury",
  2: "Venus",
  3: "Earth",
  4: "Mars",
  5: "Jupiter",
  6: "Saturn",
  7: "Uranus",
  8: "Neptune",
};

function getPlanetName(id) {
  return planets[id];
}

/*
const getPlanetName = id => planets[id]
*/
console.log(getPlanetName(2));
console.log(getPlanetName(5));
console.log(getPlanetName(3));

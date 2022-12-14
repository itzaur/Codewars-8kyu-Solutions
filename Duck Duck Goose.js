/*
Description:

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
*/
let players = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length];

  //   while (players.length < goose) {
  //     goose -= players.length;
  //   }
  //   return players[goose - 1];

  // return players[--goose % players.length]
}

console.log(duckDuckGoose(players, 1)); //"a"
console.log(duckDuckGoose(players, 3)); //"c"
console.log(duckDuckGoose(players, 10)); //"z"
console.log(duckDuckGoose(players, 20)); //"z"
console.log(duckDuckGoose(players, 30)); //"z"
console.log(duckDuckGoose(players, 18)); //"g"
console.log(duckDuckGoose(players, 28)); //"g"
console.log(duckDuckGoose(players, 12)); //"b"
console.log(duckDuckGoose(players, 2)); //"b"
console.log(duckDuckGoose(players, 7)); //"f"

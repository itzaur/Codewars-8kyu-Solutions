/*
DESCRIPTION:
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
const rps = (p1, p2) => {
  switch (true) {
    case p1 === 'scissors' && p2 === 'paper':
    case p1 === 'paper' && p2 === 'rock':
    case p1 === 'rock' && p2 === 'scissors':
      return 'Player 1 won!';
    case p1 === 'scissors' && p2 === 'rock':
    case p1 === 'paper' && p2 === 'scissors':
    case p1 === 'rock' && p2 === 'paper':
      return 'Player 2 won!';
    default:
      return 'Draw!';
  }

  //   if (p1 === p2) return "Draw!";
  //   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  //   if (p2 === rules[p1]) {
  //     return "Player 1 won!";
  //   }
  //   else {
  //     return "Player 2 won!";
  //   }

  //   const rules = {
  //     scissors: 'paper',
  //     rock: 'scissors',
  //     paper: 'rock',
  //   };
  //   return rules[p1] === p2
  //     ? 'Player 1 won!'
  //     : p1 === p2
  //     ? 'Draw!'
  //     : 'Player 2 won!';
};

console.log(rps('rock', 'rock')); //'Draw!'
console.log(rps('scissors', 'rock')); //"Player2 won!"
console.log(rps('scissors', 'scissors')); //'Draw!'
console.log(rps('paper', 'paper')); //'Draw!'

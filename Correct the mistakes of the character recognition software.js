/*
Description:

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/
function correct(string) {
  const chars = {
    0: "O",
    1: "I",
    5: "S",
  };
  return string.replace(/[015]/g, (el) => chars[el]);

  // return string.replace(/\d/g, el => "OI   S"[el])
}

console.log(correct("L0ND0N")); //"LONDON"
console.log(correct("DUBL1N")); //"DUBLIN"
console.log(correct("51NGAP0RE")); //"SINGAPORE"
console.log(correct("BUDAPE5T")); //"BUDAPEST"
console.log(correct("PAR15")); //"PARIS"

/*
DESCRIPTION:
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/
function defineSuit(card) {
    const suits = {
        "♠": 'spades',
        "♦": 'diamonds',
        "♥": 'hearts',
        "♣": 'clubs'
    }

    return suits[card.at(-1)];

    // return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}

console.log(defineSuit('Q♠'), 'spades');
console.log(defineSuit('9♦'), 'diamonds');
console.log(defineSuit('J♥'), 'hearts');
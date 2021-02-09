window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
  function deal(target, deck) { 
    const currentCard = deck.pop()
    target.push(currentCard)
}})

function getCardImage(card){
  const cardImage = document.createElement('img');
  if (card.rank === 1) { // 1 = ace
    cardImage.setAttribute('src', `images/ace_of_${card.suit}.png`);
  } else if (card.rank === 11) { // 11 = jack
    cardImage.setAttribute('src', `images/jack_of_${card.suit}.png`);
  } else if (card.rank === 12) { // 12 = queen
    cardImage.setAttribute('src', `images/queen_of_${card.suit}.png`);
  } else if (card.rank === 13) { // 13 = king
    cardImage.setAttribute('src', `images/king_of_${card.suit}.png`);
  } else { // otherwise, it's a number card
    cardImage.setAttribute('src', `images/${card.rank}_of_${card.suit}.png`);
  }
  // return the newly created card image
  return cardImage
}


const dealButton = document.querySelector('#deal-button')
// const dealerHand = document.querySelector('#dealer-hand')
// const playerHand = document.querySelector('#player-hand')

let dealerHand = [];
let playerHand = [];

dealButton.addEventListener("click", (e) => {
  dealButton.setAttribute("disabled", true)
  deal(deck, playerhand);
  deal(deck, deckhand);
  deal(deck, playerhand);
  deal(deck, deckhand);
})

// lines 23 - 33 generate your deck
function generateDeck() {
  let deck = [];
  let suits = ['hearts', 'spades', 'diamonds', 'clubs']
  for (let index = 0; index < suits.length; index++) {
    const suit = suits[index];
    for (let rank = 1; rank <= 13; rank++) {
      const card = {
        rank: rank,
        suit: suit
      }
      deck.push(card)
    }
  }
return deck
} 
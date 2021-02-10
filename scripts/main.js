window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
  function deal(deck, target) { 
    const currentCard = deck.pop()
    target.push(currentCard)
}

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
  shuffle(deck)
  return deck
} 

function render() {
  const dealerHandElement = document.querySelector('#dealer-hand')
  const playerHandElement = document.querySelector('#player-hand')
  

  for (let index = 0; index < dealerHand.length; index++) {
    const card = dealerHand[index];
    const cardElement = getCardImage(card);
    dealerHandElement.appendChild(cardElement)
  } 
  for (let index = 0; index < playerHand.length; index++) {
    const card = playerHand[index];
    const cardElement = getCardImage(card);
    playerHandElement.appendChild(cardElement)
  }
}



function shuffle(deck) {
  for (let index = 0; index < deck.length; index++) {
    const randomIndex = Math.floor(Math.random() * index);
    const temporary = deck[index]
    deck[index] = deck[randomIndex]
    deck[randomIndex] = temporary
  }
}

function calculatePoints(deck) {
  let points = 0;
  let aces = 0;
  for (let index = 0; index < deck.length; index++) {
    const currentCard = deck[index];
    if (currentCard.rank > 1 && currentCard.rank < 11) {
      points += currentCard.rank;
    } else if (currentCard.rank >= 11) {
      points += 10;
    } else if (currentCard.rank === 1) {
      aces++; 
      points += 11;
    }
  }
  while (points > 21 && aces > 0) {
    points -= 10;
    aces--;
  }
  return points;
}

const dealButton = document.querySelector('#deal-button')
// const dealerHand = document.querySelector('#dealer-hand')
// const playerHand = document.querySelector('#player-hand')

let dealerHand = [];
let playerHand = [];
let deck = generateDeck()
const hitButton = document.querySelector('#hit-button')

hitButton.addEventListener('click', (e) => {
  deal(deck, playerHand)
  render()
})

dealButton.addEventListener("click", (e) => {
  dealButton.setAttribute("disabled", true)
  deal(deck, playerHand);
  deal(deck, dealerHand);
  deal(deck, playerHand);
  deal(deck, dealerHand);
  const playerPoints = calculatePoints(playerHand);
  const dealerPoints = calculatePoints(dealerHand);
  if (playerPoints === 21 && dealerPoints < 21) {
    message("Player has 21. Player wins!");
    isGameOver = true;
  }
  render()
})

})
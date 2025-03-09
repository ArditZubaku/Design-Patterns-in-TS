import { Card } from './card';
import { CardDeck } from './card-deck';

const card1 = new Card('Card 1', 10, 5);
const card2 = new Card('Card 2', 7, 3);
const card3 = new Card('Card 3', 15, 8);
const cardDeck = new CardDeck();

cardDeck.add(card1);
cardDeck.add(card2);
cardDeck.add(card3);

const cardDeck2 = new CardDeck();
cardDeck2.add(cardDeck);
cardDeck2.add(new Card('Card 4', 20, 10));

console.log(cardDeck2.display());

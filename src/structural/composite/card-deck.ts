import { ICardComponent } from './interfaces';

export class CardDeck implements ICardComponent {
  cards: ICardComponent[] = [];

  add(component: ICardComponent): void {
    this.cards.push(component);
  }

  remove(component: ICardComponent): void {
    this.cards = this.cards.filter((card) => card !== component);
  }

  get(index: number): ICardComponent {
    return this.cards[index];
  }

  display(): string {
    return this.cards.map((card) => card.display()).join('\n');
  }
}

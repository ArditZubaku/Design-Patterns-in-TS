import { ICardComponent } from './interfaces';

export class Card implements ICardComponent {
  constructor(
    public name: string,
    public attack: number,
    public defense: number,
  ) {}

  // I think these shouldn't be part of the ICardsComponent interface, but the tutorial has them here
  add(_component: ICardComponent): void {
    throw new Error('Operation not supported');
  }

  remove(_component: ICardComponent): void {
    throw new Error('Operation not supported');
  }

  get(_index: number): ICardComponent {
    throw new Error('Operation not supported');
  }

  display(): string {
    return `Card: ${this.name} (Attack: ${this.attack}, Defense: ${this.defense})`;
  }
}

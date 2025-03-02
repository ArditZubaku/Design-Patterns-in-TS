import { inject, injectable } from 'inversify';
import { IDepA, IDepB, IDepC } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class ConcreteC implements IDepC {
  constructor(
    @inject(TYPES.IDepA)
    private concreteA: IDepA,
    @inject(TYPES.IDepB)
    private concreteB: IDepB,
  ) {}
  doC(): void {
    this.concreteA.doA();
    this.concreteB.doB();
    console.log('Running C');
  }
}

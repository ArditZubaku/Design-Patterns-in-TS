import { injectable } from 'inversify';
import { IDepB } from '../interfaces';

@injectable()
export class ConcreteB implements IDepB {
  doB(): void {
    console.log('Running B');
  }
}

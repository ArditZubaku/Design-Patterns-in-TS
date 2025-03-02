import { injectable } from 'inversify';
import { IDepA } from '../interfaces';

@injectable()
export class ConcreteA implements IDepA {
  doA(): void {
    console.log('Running A');
  }
}

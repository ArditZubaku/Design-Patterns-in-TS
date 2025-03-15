import { ISubscriptionState } from '../interfaces';
import { PaidState } from './paid-state';
import { Subscription } from './subscription';

export class TrialExpiredState implements ISubscriptionState {
  constructor(private subcription: Subscription) {}

  pay(amount: number): void {
    this.subcription.state = new PaidState(this.subcription, amount);
  }

  checkExpiration(): void {
    throw new Error('Trial already expired!!!');
  }

  report(): string {
    return 'Trial expired!!!';
  }
}

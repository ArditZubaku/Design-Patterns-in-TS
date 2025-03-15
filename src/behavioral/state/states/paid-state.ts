import { ISubscriptionState } from '../interfaces';
import { Subscription } from './subscription';
import { TrialExpiredState } from './trial-expired-state';

export class PaidState implements ISubscriptionState {
  private amountPaid: number = 0;

  constructor(
    private subcription: Subscription,
    private amount: number,
  ) {
    this.amountPaid = amount;
  }

  pay(amount: number): void {
    throw new Error('Already paid!!!')
  }

  checkExpiration(): void {
    this.subcription.state = new TrialExpiredState(this.subcription);
  }

  report(): string {
    return 'Paid!!!';
  }
}

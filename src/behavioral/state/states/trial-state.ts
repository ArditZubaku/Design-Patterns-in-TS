import { ISubscriptionState } from '../interfaces';
import { PaidState } from './paid-state';
import { Subscription } from './subscription';
import { TrialExpiredState } from './trial-expired-state';

export class TrialState implements ISubscriptionState {
  private daysRemaining: number = 14;

  constructor(private subscription: Subscription) {}

  pay(amount: number): void {
    this.subscription.state = new PaidState(this.subscription, amount);
  }

  checkExpiration(): void {
    this.daysRemaining--;
    if (this.daysRemaining <= 0) {
      this.subscription.state = new TrialExpiredState(this.subscription);
    }
  }

  report(): string {
    return `${this.daysRemaining} left on trial`;
  }
}

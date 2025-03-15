import { ISubscriptionState } from '../interfaces';
import { TrialState } from './trial-state';

export class Subscription {
  state: ISubscriptionState = new TrialState(this);
}

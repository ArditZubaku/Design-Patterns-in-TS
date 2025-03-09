type CurrentSpeedObserver = (newValue: number, oldValue: number) => void;

export class Car {
  private currentSpeed: number = 0;
  private readonly maxSpeed: number;
  private readonly currentSpeedObservers: CurrentSpeedObserver[] = [];

  constructor(maxSpeed: number) {
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed(): number {
    return this.maxSpeed;
  }

  getCurrentSpeed(): number {
    return this.currentSpeed;
  }

  setCurrentSpeed(newSpeed: number): void {
    if (newSpeed > this.maxSpeed) {
      throw new Error('Speed cannot be greater than max speed');
    } else if (newSpeed < 0) {
      throw new Error('Speed cannot be negative');
    }

    if (newSpeed !== this.currentSpeed) {
      const oldValue = this.currentSpeed;
      this.currentSpeed = newSpeed;
      this.notifyCurrentSpeedObservers(newSpeed, oldValue);
    }
  }

  registerSpeedObserver(observer: CurrentSpeedObserver): void {
    if (!this.currentSpeedObservers.find(o => o === observer)) {
    this.currentSpeedObservers.push(observer);
    }
  }

  notifyCurrentSpeedObservers(newValue: number, oldValue: number): void {
    this.currentSpeedObservers.forEach((observer) => observer(newValue, oldValue));
  }
}

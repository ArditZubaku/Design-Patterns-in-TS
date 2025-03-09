import { Car } from "./car";
import { promisify} from "util";

function reportCurrentSpeed(newValue: number, oldValue: number): void {
  console.log(`Current speed changed from ${oldValue} to ${newValue}`);
}

function reportMaxSpeed(newValue: number, oldValue: number): void {
    const speedLimit = 100;
    if (newValue > speedLimit) {
        console.log(`Speed limit exceeded: ${newValue}`);
    }
}

const sleep = promisify(setTimeout);

async function main() {
  const car = new Car(200);

  car.registerSpeedObserver(reportCurrentSpeed);
  car.registerSpeedObserver(reportMaxSpeed);

  while (car.getCurrentSpeed() < car.getMaxSpeed()) {
    car.setCurrentSpeed(car.getCurrentSpeed() + 10);
    await sleep(1000);
  }
}

main();

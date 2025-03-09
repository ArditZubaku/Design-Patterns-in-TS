import { ICommand } from './interfaces';

export class CommandWorker {
  private readonly commands: ICommand[] = [];
  private readonly interval: number;

  constructor(interval: number) {
    this.interval = interval;
    this.startWorker();
  }

  public addCommand(command: ICommand): void {
    console.log(`Adding command: ${command.constructor.name}`);

    if (!this.commands.find((c) => c === command)) {
      this.commands.push(command);
    }
  }

  private startWorker(): void {
    setInterval(() => {
      const command: ICommand | undefined = this.commands.pop();
      console.log(`Executing command: ${command?.constructor.name}`);
      command?.execute();
    }, this.interval);
  }
}

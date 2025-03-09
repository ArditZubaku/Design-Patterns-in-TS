import { IErrorDisplayStrategy } from '../interfaces';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.error(`\x1b[31mError: ${title}\x1b[0m`);
    console.error(`\x1b[34mBody: ${body}\x1b[0m`);
  }
}

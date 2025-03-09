import { IErrorLoggingStrategy } from '../interfaces';
import fs from 'node:fs';

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
  log(error: Error): void {
    fs.appendFile('error.log', `${error.stack}\n`, { flag: 'a' }, (err) => {
      if (err) {
        console.error(`Error logging failed: ${err.message}`);
      } else {
        console.error(`Error logged to file`);
      }
    });
  }
}

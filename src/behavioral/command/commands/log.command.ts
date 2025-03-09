import fs from 'node:fs';
import path from 'node:path';
import { ICommand } from '../interfaces';

export type LogCommandOptions = {
  title: string;
  body: string;
  error: Error;
  fileName: string;
};

export class LogCommand implements ICommand {
  constructor(private readonly options: LogCommandOptions) {}

  execute(): Promise<void> {
    return new Promise((resolve, reject) => {
      const contents = `${this.options.title}: ${this.options.body} - ${this.options.error ? this.options.error.message : ''}`;
      fs.appendFile(
        `${__dirname}/${this.options.fileName}`,
        contents,
        { flag: 'a' },
        (err) => {
          if (err) {
            console.error('Error writing to log file');
            reject(err);
          } else {
            console.log(`Log written to ${this.options.fileName}`);
            resolve();
          }
        },
      );
    });
  }
}

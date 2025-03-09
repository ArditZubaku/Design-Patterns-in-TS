import { CommandWorker } from './command.worker';
import { LogCommand, LogCommandOptions } from './commands';
import { promisify } from 'node:util';

const sleep = promisify(setTimeout);

async function main() {
  const commandWorker = new CommandWorker(5000);

  while (true) {
    try {
      await sleep(1000);

      let err: any = 100;
      err();
    } catch (err: unknown) {
      const params: LogCommandOptions = {
        title: 'Error',
        body: 'Please fix this error',
        error: err as Error,
        fileName: 'error.log',
      };

      commandWorker.addCommand(new LogCommand(params));
    }
  }
}

main();

import { IErrorDisplayStrategy, IErrorLoggingStrategy } from './interfaces';

export class ErrorHandler {
  constructor(
    private errorDisplayStrategy: IErrorDisplayStrategy,
    private errorLoggingStrategy: IErrorLoggingStrategy,
  ) {}

  handleError(error: Error, title: string, body: string): void {
    this.errorDisplayStrategy.display(title, body);
    this.errorLoggingStrategy.log(error);
  }
}

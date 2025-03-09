export interface IErrorLoggingStrategy {
  log(error: Error): void;
}

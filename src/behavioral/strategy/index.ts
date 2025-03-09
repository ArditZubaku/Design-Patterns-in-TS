import { ErrorHandler } from './error.handler';
import {
  ConsoleErrorDisplayStrategy,
  FileErrorLoggingStrategy,
} from './strategies';

const errorHandler = new ErrorHandler(
  new ConsoleErrorDisplayStrategy(),
  new FileErrorLoggingStrategy(),
);

errorHandler.handleError(
  new Error('Something went wrong'),
  'Error',
  'Something went wrong while processing your request',
);

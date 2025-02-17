import { MessageBox } from './single-responsibility';

// Initial setup - closing the class
export class ErrorHandler {
  private messageBox: MessageBox;

  constructor(messageBox) {
    this.messageBox = messageBox;
  }

  wrapError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    };

    if (severity > 5) {
      this.handleWarning('Warning', publicResponse);
    } else {
      this.handleError('Critical Error', publicResponse);
    }
  }

  private handleError(header, content) {
    this.messageBox.show(header, content);
  }

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  }
}

export class ErrorLogger {
  private readonly endpoint: string = '/api/log';

  constructor(private httpClient) {}

  logError(errorObject) {
    return this.httpClient.post(this.endpoint, errorObject);
  }
}

// Extending the ErrorHandler class without modyfiying it
class ErrorHandlerWithLogging extends ErrorHandler {
  private logger: ErrorLogger;

  constructor(messageBox, logger) {
    super(messageBox);
    this.logger = logger;
  }

  wrapError(err: any, publicResponse: any, severity: any): void {
    this.logger.logError(err).then(() => {
      super.wrapError(err, publicResponse, severity);
    });
  }
}

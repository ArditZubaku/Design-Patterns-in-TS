import { createInterface, ReadLine } from 'node:readline';

// TODO: I think that it would have been way better if this class was an abstract one with abstract methods instead
class ProfileConfiguration {
  protected readline: ReadLine;

  constructor() {
    this.readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async start(): Promise<void> {
    await this.configureAccountSecurity();
    await this.configureEmailIntegration();
    await this.configurePaymentsMethod();
    await this.configureSupportMethod();
    this.readline.close();
  }

  public async configureAccountSecurity(): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async configureEmailIntegration(): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async configureSupportMethod(): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async configurePaymentsMethod(): Promise<void> {
    throw new Error('Method not implemented');
  }
}

class BasicPlanConfiguration extends ProfileConfiguration {
  public async configureAccountSecurity(): Promise<void> {
    console.log('Click here to enter a security question');
  }

  public async configureEmailIntegration(): Promise<void> {
    console.log('Click here to setup the mail server');
  }

  public async configureSupportMethod(): Promise<void> {
    console.log('Click here to create a "Contact Us" page');
  }

  public async configurePaymentsMethod(): Promise<void> {
    console.log('Click here to setup Paypal');
  }
}

class PremiumPlanConfiguration extends ProfileConfiguration {
  public async configureAccountSecurity(): Promise<void> {
    return new Promise((resolve, _reject) => {
      this.readline.question(
        'What security method would you like to use?\n1.Security question\n2.Two Factor Authentication',
        (answer) => {
          if (parseInt(answer) === 1) {
            console.log('Click here to enter a security question');
          } else if (parseInt(answer) === 2) {
            console.log('Click here to setup 2FA');
          } else {
            console.log('Try again');
          }

          resolve();
        },
      );
    });
  }

  public async configureEmailIntegration(): Promise<void> {
    console.log('Click here to setup MailChimp');
  }

  public async configureSupportMethod(): Promise<void> {
    console.log('Click here to setup Intercom');
  }

  public async configurePaymentsMethod(): Promise<void> {
    return new Promise((resolve, _reject) => {
      this.readline.question('Paypal or Stripe?', (answer) => {
        if (answer.toLowerCase() === 'paypal') {
          console.log('Click here to setup Paypal');
        } else if (answer.toLowerCase() === 'stripe') {
          console.log('Click here to setup Stripe');
        } else {
          console.log('Try again');
        }
      });

      resolve();
    });
  }
}

const basicPlan = new BasicPlanConfiguration();
basicPlan.start();

const premiumPlan = new PremiumPlanConfiguration();
premiumPlan.start();

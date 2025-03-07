class Computer {
  public boot(): void {
    console.log('Computer is booting!');
  }

  public shutdown(): void {
    console.log('Computer is shutting down!');
  }

  public display(): void {
    console.log('Displaying content in one screen!');
  }

  public print(): void {
    console.log('No printer found!');
  }

  public renderVideo(): void {
    console.log('Cannot render video without a dedicated graphics card!');
  }
}

class ComputerComponentDecorator extends Computer {
  constructor(private computer: Computer) {
    super();
  }

  public boot() {
    return this.computer.boot();
  }

  public display(): void {
    return this.computer.display();
  }

  public print(): void {
    return this.computer.print();
  }

  public shutdown(): void {
    return this.computer.shutdown();
  }

  public renderVideo(): void {
    return this.computer.renderVideo();
  }
}

class Server extends Computer {
  public boot(): void {
    console.log('Server is booting..');
  }

  public shutdown(): void {
    console.log('Server is shutting down...');
  }
}

class ComputerWithPrinter extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  public print(): void {
    console.log('Printing...');
  }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  public renderVideo(): void {
    console.log('Rendering video with a dedicated GPU');
  }
}

const server = new Server();
const serverWithPrinter = new ComputerWithPrinter(server);
const serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(
  serverWithPrinter,
);

serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();

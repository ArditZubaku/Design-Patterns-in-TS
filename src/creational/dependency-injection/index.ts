import { IoCContainer } from './ioc-container';

interface IDepA {
  doA(): void;
}

interface IDepB {
  doB(): void;
}

interface IDepC {
  doC(): void;
}

class ConcreteA implements IDepA {
  doA(): void {
    console.log('Running A');
  }
}

class ConcreteB implements IDepB {
  doB(): void {
    console.log('Running B');
  }
}

class ConcreteC implements IDepC {
  constructor(
    private concreteA: IDepA,
    private concreteB: IDepB,
  ) {}
  doC(): void {
    this.concreteA.doA();
    this.concreteB.doB();
    console.log('Running C');
  }
}

const container = IoCContainer.getInstance();
container.register('IDepA', [], ConcreteA);
container.register('IDepB', [], ConcreteB);
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

const a = container.resolve<IDepA>('IDepA');
a.doA();

const b = container.resolve<IDepB>('IDepB');
b.doB();

const c = container.resolve<IDepC>('IDepC');
c.doC();

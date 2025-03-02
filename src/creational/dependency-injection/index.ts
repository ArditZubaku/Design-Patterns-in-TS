import { IoCContainer, Register } from './ioc-container';

interface IDepA {
  doA(): void;
}

interface IDepB {
  doB(): void;
}

interface IDepC {
  doC(): void;
}

//@Register('IDepA', [])
@Register([])
class ConcreteA implements IDepA {
  doA(): void {
    console.log('Running A');
  }
}

@Register([])
class ConcreteB implements IDepB {
  doB(): void {
    console.log('Running B');
  }
}

@Register([ConcreteA, ConcreteB])
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
//container.register('IDepA', [], ConcreteA);
//container.register('IDepB', [], ConcreteB);
//container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

// TODO: Make this resolve method a decorator too
const a = container.resolve<IDepA>(ConcreteA.name);
a.doA();

const b = container.resolve<IDepB>(ConcreteB.name);
b.doB();

const c = container.resolve<IDepC>(ConcreteC.name);
c.doC();

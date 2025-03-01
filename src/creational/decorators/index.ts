// args are passed by the Decorator mechanism itself a.k.a TS
const DisableDecorator: MethodDecorator = (_target, _propertyKey, descriptor) => {
  descriptor.value = (() => {
    // throw new Error('Method is disabled');
    console.error('Method is disabled');
  }) as typeof descriptor.value;

  return descriptor;
};

const Before = (hook: Function): Function => {
  // The factory function returns a decorator that can be applied to a method
  // The factory runs only once
  return function<T extends Function>(_target: Object, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    return {
      get(this: T) {
        const originalMethod = descriptor.value.bind(this);
        hook = hook.bind(this);
        return () => {
          hook();
          originalMethod();
        }
      },
    }
  }
}

// const Capitalize = () => {
//   return function<T extends { new(...args: any[]): {}}>(constructor: T): T {
//     return class extends constructor {
//       a = 'A';
//       b = 'B';
//     }
//   }
// }

const Capitalize = () => {
  return function<T extends { new(...args: any[]): {}}>(constructor: T): T {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        // Get all properties of the instance
        const propertyNames = Object.getOwnPropertyNames(this);
        
        // Capitalize all string properties
        propertyNames.forEach(prop => {
          if (typeof this[prop] === 'string') {
            this[prop] = this[prop].toUpperCase();
          }
        });
      }
    }
  }
}

interface IFooBar {
  foo(): void;
  bar: () => void;
}

class Whatever implements IFooBar {
  public foo() {
    console.log('Foo');
  }

  public bar() {
    console.log('Bar');
  }
}

const whatever = new Whatever();
whatever.foo();
whatever.bar();

@Capitalize()
class SecondWhatever implements IFooBar {
  private a: string = 'a';
  private b: string = 'b';

  @DisableDecorator
  public foo() {
    console.log('Foo');
  }

  @Before(() => console.log('Before bar'))
  public bar() {
    console.log('Bar');
  }

  public baz() {
    console.log(`${this.a} ${this.b}`);
  }
}

const disabledWhatever = new SecondWhatever();
disabledWhatever.foo();
disabledWhatever.bar();
disabledWhatever.baz();
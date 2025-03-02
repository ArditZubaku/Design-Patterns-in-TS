interface IConstructor {
  new (...args: any[]): any;
}
export class IoCContainer {
  private static instance = new IoCContainer();
  // object vs Object - the first doesn't allow primitives
  // Can't use interfaces since JS doesn't natively support them
  // Probably better to use Map
  private dependencies: Record<string, IConstructor> = {};

  private constructor() {
    if (IoCContainer.instance) {
      throw new Error('Cannot initialize singleton class using new');
    }

    IoCContainer.instance = this;
  }

  public static getInstance(): IoCContainer {
    return IoCContainer.instance;
  }

  public register(
    name: string,
    dependencies: string[],
    Implementation: IConstructor,
  ) {
    if (this.dependencies[name]) {
      throw new Error('Dependency already registered');
    }
    let dependenciesImplementations =
      this.getDependenciesImplementations(dependencies);
    this.dependencies[name] = new Implementation(
      ...dependenciesImplementations,
    );
  }

  public resolve<T>(name: string): T {
    if (!this.dependencies[name]) {
      throw new Error(`Unresolved dependency ${name}`);
    }

    return this.dependencies[name] as T;
  }

  private getDependenciesImplementations(names: string[]): IConstructor[] {
    return names.map((name) => this.resolve(name));
  }
}

// Register decorator
//export function Register(name: string, dependencies: string[]): Function {
//return function<T extends IConstructor>(constructor: T) {
//console.log('constructor', constructor.name);
//IoCContainer.getInstance().register(name, dependencies, constructor)
//}
//}

export function Register(dependencies: IConstructor[]): Function {
  return function <T extends IConstructor>(constructor: T) {
    console.log('constructor', constructor.name);
    IoCContainer.getInstance().register(
      constructor.name,
      dependencies.map((d) => d.name),
      constructor,
    );
  };
}

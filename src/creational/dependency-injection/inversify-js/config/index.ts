import { Container } from 'inversify';
import { TYPES } from '../types';
import { ConcreteA, ConcreteB, ConcreteC } from '../implementations';
import { IDepA, IDepB, IDepC } from '../interfaces';

const container = new Container({
  defaultScope: 'Singleton',
});

// Declare scope per dependency
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// This will return a new instance every time we ask for one from the container
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

// This will return a new instance for each http request
// When working with non-http context, it will return the same instance until we call container.unbind
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;

import container from './config';
import { IDepC } from './interfaces';
import { TYPES } from './types';

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();

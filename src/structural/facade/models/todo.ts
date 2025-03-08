import { IUser } from './user';

export interface IToDo {
  userId: number;
  user: IUser;
  id: number;
  title: string;
  completed: boolean;
}

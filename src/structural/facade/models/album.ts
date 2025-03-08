import { IUser } from './user';

export interface IAlbum {
  userId: number;
  user: IUser;
  id: number;
  title: string;
}

import { IAlbum, IComment, IPhoto, IPost, IToDo, IUser } from '../models';

export interface IJsonPlaceholderService {
  getUsers(): Promise<IUser[]>;
  getPosts(): Promise<IPost[]>;
  getComments(): Promise<IComment[]>;
  getAlbums(): Promise<IAlbum[]>;
  getPhotos(): Promise<IPhoto[]>;
  getTodos(): Promise<IToDo[]>;
}

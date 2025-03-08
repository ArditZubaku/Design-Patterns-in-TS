import { IUser, IPost, IComment, IAlbum, IPhoto, IToDo } from '../models';
import { IJsonPlaceholderService } from './json-placeholder.interface';

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private async getEntity<T>(entity: string): Promise<T[]> {
    return (await (
      await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
    ).json()) as T[];
  }

  async getUsers(): Promise<IUser[]> {
    return this.getEntity<IUser>('users');
  }

  async getPosts(): Promise<IPost[]> {
    return this.getEntity<IPost>('posts');
  }

  async getComments(): Promise<IComment[]> {
    return this.getEntity<IComment>('comments');
  }

  async getAlbums(): Promise<IAlbum[]> {
    return this.getEntity<IAlbum>('albums');
  }

  async getPhotos(): Promise<IPhoto[]> {
    return this.getEntity<IPhoto>('photos');
  }

  async getTodos(): Promise<IToDo[]> {
    return this.getEntity<IToDo>('todos');
  }
}

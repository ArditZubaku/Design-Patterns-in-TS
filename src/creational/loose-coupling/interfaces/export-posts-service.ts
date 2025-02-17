import { IPost } from './post';

export interface IExportPostsService {
  export(posts: IPost[]): string;
}

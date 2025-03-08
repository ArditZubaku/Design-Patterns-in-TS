import { IPost } from './post';

export interface IComment {
  postId: number;
  post: IPost;
  id: number;
  name: string;
  email: string;
  body: string;
}

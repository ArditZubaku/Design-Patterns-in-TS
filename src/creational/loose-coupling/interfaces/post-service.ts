import { IExportPostsService } from './export-posts-service';
import { IPost } from './post';

export interface IPostsService {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
  export(service: IExportPostsService): Promise<string>;
}

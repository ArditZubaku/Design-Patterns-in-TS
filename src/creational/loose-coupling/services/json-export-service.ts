import { IPost } from '../interfaces';
import { IExportPostsService } from '../interfaces/export-posts-service';

export class JSONExportService implements IExportPostsService {
  export(posts: IPost[]): string {
    return JSON.stringify(posts);
  }
}

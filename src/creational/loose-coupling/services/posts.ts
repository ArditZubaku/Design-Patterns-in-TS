import { IPost, IPostsService } from '../interfaces';
import fs from 'node:fs';
import { IExportPostsService } from '../interfaces/export-posts-service';

export class PostsService implements IPostsService {
  private filePath: string = __dirname + '/../../../data/posts.json';

  getAll(): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(
        this.filePath,
        'utf8',
        (err: NodeJS.ErrnoException | null, data: string) => {
          if (err) {
            reject(err);
          }
          resolve(JSON.parse(data));
        },
      );
    });
  }

  save(post: IPost): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        fs.writeFile(
          this.filePath,
          JSON.stringify(posts),
          (err: NodeJS.ErrnoException | null) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          },
        );
      });
    });
  }

  async export(service: IExportPostsService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}

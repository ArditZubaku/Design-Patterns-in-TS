import { IPost, IPostsService } from '../interfaces';
import { IExportPostsService } from '../interfaces/export-posts-service';

export class MockPostsService implements IPostsService {
  private posts: IPost[] = [];
  constructor() {
    this.posts = [
      {
        id: 1,
        title: 'First Post',
        body: 'This is the body of the first post.',
        postedBy: 'John Doe',
      },
      {
        id: 2,
        title: 'Second Post',
        body: 'Some interesting content for the second post.',
        postedBy: 'Jane Smith',
      },
      {
        id: 3,
        title: 'Third Post',
        body: 'Another post with its own body text.',
        postedBy: 'Admin',
      },
    ];
  }

  getAll(): Promise<IPost[]> {
    return Promise.resolve(this.posts);
  }

  save(post: IPost): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }

  async export(service: IExportPostsService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}

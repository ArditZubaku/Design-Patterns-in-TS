import fs from 'node:fs';
// Classes should depend on interfaces (abstractions) not concrete implementations
// Could have been a type
interface IPost {
  id: number;
  title: string;
  body: string;
  postedBy: string;
}

interface IPostsService {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
}

class PostsService implements IPostsService {
  private filePath: string = __dirname + '/../../data/posts.json';

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
}

class MockPostsService implements IPostsService {
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
}

class NewsFeed {
  constructor(private service: IPostsService) {}

  show() {
    this.service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.id}. ${post.title} - ${post.body}`);
      });
    });
  }
}

const newsFeed = new NewsFeed(new PostsService());
newsFeed.show();

const newsFeed2 = new NewsFeed(new MockPostsService());
newsFeed2.show();

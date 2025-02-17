import { IPostsService } from './interfaces';

export class NewsFeed {
  constructor(private service: IPostsService) {}

  show() {
    this.service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.id}. ${post.title} - ${post.body}`);
      });
    });
  }
}

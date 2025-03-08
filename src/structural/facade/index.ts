import { IUser } from './models';
import { IJsonPlaceholderService, JsonPlaceholderService } from './services';

export class JsonPlaceholderFacade {
  constructor(private jsonPlaceholderService: IJsonPlaceholderService) {}

  async getUsers(): Promise<IUser[]> {
    return this.jsonPlaceholderService.getUsers();
  }

  async getUser(id: number): Promise<IUser | null> {
    const allUsers = await this.getUsers();
    const user = allUsers.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    const posts = await this.jsonPlaceholderService.getPosts();
    const todos = await this.jsonPlaceholderService.getTodos();

    user.posts = posts.filter((post) => post.userId === id);
    user.todos = todos.filter((todo) => todo.userId === id);

    return user;
  }
}

const jsonPlaceholderFacade = new JsonPlaceholderFacade(
  new JsonPlaceholderService(),
);

jsonPlaceholderFacade.getUser(1).then((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log('User not found');
  }
});

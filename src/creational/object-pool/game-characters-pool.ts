import { IGameCharacter } from '../factory/game-character';
import { GameCharactersFactory } from '../factory/game-characters-factory';

export class GameCharactersPool {
  private warriorsPool: IGameCharacter[] = [];
  private magesPool: IGameCharacter[] = [];

  static readonly WARRIORS_POOL_SIZE = 30;
  static readonly MAGES_POOL_SIZE = 20;

  constructor(private readonly level: number) {
    this.loadWarriorsPool();
    this.loadMagesPool();
  }

  private loadWarriorsPool() {
    for (let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
      this.warriorsPool.push(GameCharactersFactory.getWarrior(this.level));
    }
  }

  private loadMagesPool() {
    for (let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
      this.magesPool.push(GameCharactersFactory.getMage(this.level));
    }
  }

  private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
    if (!pool.length) {
      reloadFn();
    }

    return pool.pop() as T;
  }

  public getWarrior(): IGameCharacter {
    return this.getPoolItem<IGameCharacter>(
      this.warriorsPool,
      //this.loadWarriorsPool.bind(this),
      () => this.loadWarriorsPool(),
    );
  }

  public getMage(): IGameCharacter {
    return this.getPoolItem<IGameCharacter>(
      this.magesPool,
      //this.loadMagesPool.bind(this),
      () => this.loadMagesPool(),
    );
  }
}

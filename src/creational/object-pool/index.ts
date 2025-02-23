import { log } from 'console';
import { GameCharactersPool } from './game-characters-pool';

const level = 12;
const pool = new GameCharactersPool(level);

for (let i = 0; i < 40; i++) {
  log(i + 1);
  log(pool.getWarrior());
}

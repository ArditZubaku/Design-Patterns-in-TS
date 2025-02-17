import { GameCharactersFactory } from './game-characters-factory';

const warrior = GameCharactersFactory.getWarrior(6);
const mage = GameCharactersFactory.getMage(12);

console.log(`Warrior at level 6: `, warrior);
console.log(`Mage at level 12: `, mage);

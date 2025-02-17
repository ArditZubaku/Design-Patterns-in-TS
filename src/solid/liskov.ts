export class QuizQuestion {
  private question: string;
  private answer1: string;
  private answer2: string;
  private answer3: string;
  private answer4: string;
  private correctAnswer: number;

  constructor(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
  }

  public getQuestion(): string {
    return this.question;
  }

  public getAnswer1(): string {
    return this.answer1;
  }

  public getAnswer2(): string {
    return this.answer2;
  }

  public getAnswer3(): string {
    return this.answer3;
  }

  public getAnswer4(): string {
    return this.answer4;
  }

  public getCorrectAnswer(): number {
    return this.correctAnswer;
  }
}

function formatQuestion(quizQuestion: QuizQuestion) {
  console.log(quizQuestion.getQuestion());
  console.log(`1. ${quizQuestion.getAnswer1()}`);
  console.log(`2. ${quizQuestion.getAnswer2()}`);
  console.log(`3. ${quizQuestion.getAnswer3()}`);
  console.log(`4. ${quizQuestion.getAnswer4()}`);
}

const quizQuestion = new QuizQuestion(
  'Which framework uses TypeScript',
  'React',
  'Vue',
  'Angular',
  'Cycle',
  3,
);

formatQuestion(quizQuestion);

class TrueFalseQuestion extends QuizQuestion {
  constructor(question: string) {
    super(question, 'TRUE', 'FALSE', null, null, 1);
  }
}

const trueFalseQuestion = new TrueFalseQuestion(
  'TypeScript is a superset of JavaScript',
);
formatQuestion(trueFalseQuestion);

export type Answer = {
  questions: {
    question: string
    answer: AnsweredQuestion
  }[]
}

export type AnsweredQuestion = {
  player1: string
  player2: string
}

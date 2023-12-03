import { questions } from '@/config/questions'

export const getRandomQuestions = (num: number) => {
  const tmpQuestions = [...questions]

  for (let i = tmpQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tmpQuestions[i], tmpQuestions[j]] = [tmpQuestions[j], tmpQuestions[i]]
  }

  return tmpQuestions.slice(0, num)
}

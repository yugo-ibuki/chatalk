import { getAnswers } from '@/repositories/getAnswers'
import { useEffect, useState } from 'react'
import { Answer } from '@/models'
import { getQuestions } from '@/repositories/getQuestions'

type Props = {
  questionId: string
}

export const useResultPage = ({ questionId }: Props) => {
  const [answers, setAnswers] = useState<Answer>()

  useEffect(() => {
    ;(async () => {
      try {
        const answers = await getAnswers({ questionId })
        const questionData = await getQuestions(questionId)
        const questions = questionData?.questions
        if (answers && questions) {
          const player1Answers = Object.entries(answers.player1).map((a) => a[1] as string)
          const player2Answers = Object.entries(answers.player2).map((a) => a[1] as string)
          const data = {
            questions: questions.map((q, i) => {
              return {
                question: q.question,
                answer: {
                  player1: player1Answers[i],
                  player2: player2Answers[i],
                },
              }
            }),
          }
          console.log(data)
          setAnswers(data)
        }
      } catch (error) {
        console.error(error)
      }
    })()
  }, [getAnswers, questionId])

  return {
    answers,
  }
}

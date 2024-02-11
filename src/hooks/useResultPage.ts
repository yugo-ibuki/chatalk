import { getAnswers } from '@/repositories/getAnswers'
import { useEffect, useState } from 'react'
import { Answer } from '@/models'
import { getQuestions } from '@/repositories/getQuestions'
import { useParams } from 'next/navigation'

export const useResultPage = () => {
  const params = useParams()
  const questionId = params.questionId as string
  const [answers, setAnswers] = useState<Answer | undefined>()
  const isBothAnswered = answers?.questions.every((q) => q.answer.player1 && q.answer.player2)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const answers = await getBothAnswers(questionId)
        setAnswers(answers)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [questionId])

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!isBothAnswered) {
        const answers = await getBothAnswers(questionId)
        setAnswers(answers)
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return {
    answers,
    loading,
    isBothAnswered,
  }
}

const getBothAnswers = async (questionId: string) => {
  const answers = await getAnswers({ questionId })
  const questionData = await getQuestions(questionId)
  const questions = questionData?.questions
  if (answers?.player1 && answers.player2 && questions) {
    const player1Answers = Object.entries(answers.player1).map((a) => a[1] as string)
    const player2Answers = Object.entries(answers.player2).map((a) => a[1] as string)
    return {
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
  }
}

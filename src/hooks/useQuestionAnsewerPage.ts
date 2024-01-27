import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'
import { useForm } from 'react-hook-form'
import { Question } from '@/models'
import { createAnswer } from '@/repositories/createAnswer'
import { checkAnswer } from '@/repositories/checkAnswer'

export const useQuestionAnswerPage = () => {
  const params = useParams()
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionId, setQuestionId] = useState<string>('')
  const [error, setError] = useState<Error | null>(null)

  const form = useForm<Question>({ mode: 'onChange' })

  const onSubmit = useCallback(async () => {
    const isAlreadyAnswered = await checkAnswer(questionId)
    const player = isAlreadyAnswered ? 'player2' : 'player1'
    await createAnswer(player, questionId, form.getValues())
  }, [form, questionId])

  useEffect(() => {
    ;(async () => {
      if (typeof params.questionId !== 'string') {
        setError(new Error('Invalid ID'))
        return
      }
      const data = await getQuestions(params.questionId)
      setQuestionId(params.questionId)
      // error handling
      setQuestions(data!.questions)
    })()
  }, [getQuestions])

  return { questions, error, onSubmit, form }
}

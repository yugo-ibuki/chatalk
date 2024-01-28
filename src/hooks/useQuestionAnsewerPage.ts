import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'
import { useForm } from 'react-hook-form'
import { Question } from '@/models'
import { createAnswer } from '@/repositories/createAnswer'

export const useQuestionAnswerPage = () => {
  const params = useParams()
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionId, setQuestionId] = useState<string>('')
  const [error, setError] = useState<Error | null>(null)

  const form = useForm<Question>({ mode: 'onChange' })

  const player1Submit = useCallback(async () => {
    await createAnswer('player1', questionId, form.getValues())
  }, [form.getValues, questionId])

  const player2Submit = useCallback(async () => {
    await createAnswer('player2', questionId, form.getValues())
  }, [form.getValues, questionId])

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

  return { questions, error, form, player1Submit, player2Submit }
}

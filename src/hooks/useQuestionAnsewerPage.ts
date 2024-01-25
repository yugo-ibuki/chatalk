import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'
import { useForm } from 'react-hook-form'

export const useQuestionAnsewerPage = () => {
  const params = useParams()
  const [questions, setQuestions] = useState<{ question: string }[]>([])
  const [error, setError] = useState<Error | null>(null)

  const form = useForm({ mode: 'onChange' })

  const onSubmit = useCallback(() => {
    form.handleSubmit(async (data) => {
      console.log(data)
    })
  }, [form])

  useEffect(() => {
    ;(async () => {
      if (typeof params.questionId !== 'string') {
        setError(new Error('Invalid ID'))
        return
      }
      const data = await getQuestions(params.questionId)
      setQuestions(data!.questions)
    })()
  }, [getQuestions])

  return { questions, error, onSubmit, form }
}

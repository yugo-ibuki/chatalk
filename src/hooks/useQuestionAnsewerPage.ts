import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'

export const useQuestionAnsewerPage = () => {
  const params = useParams()
  const [questions, setQuestions] = useState<{ question: string }[]>([])
  const [error, setError] = useState<Error | null>(null)

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

  return { questions, error }
}

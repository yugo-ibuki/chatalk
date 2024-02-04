import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'
import { useForm } from 'react-hook-form'
import { Question } from '@/models'
import { createAnswer } from '@/repositories/createAnswer'
import { useClipboard } from '@chakra-ui/hooks'

export const useQuestionAnswerPage = () => {
  // URLパラメータからquestionIdを取得
  const params = useParams()
  const questionIdParam = params.questionId as string

  // 質問集の作成
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionId, setQuestionId] = useState<string>('')

  // URLのコピー用のボタン
  const { onCopy: onChakraCopy, setValue, hasCopied } = useClipboard('')
  const player2Url = `/${questionId}/player2`

  // フォーム
  const form = useForm<Question>({ mode: 'onChange' })

  // エラー
  const [error, setError] = useState<Error | null>(null)

  const player1Submit = useCallback(async () => {
    await createAnswer('player1', questionId, form.getValues())
  }, [form.getValues, questionId])

  const player2Submit = useCallback(async () => {
    await createAnswer('player2', questionId, form.getValues())
  }, [form.getValues, questionId])

  const onCopy = useCallback(() => {
    const domain = new URL(window.document.URL).origin
    setValue(domain + player2Url)
    onChakraCopy()
  }, [window.document.URL, setValue, onChakraCopy, player2Url])

  useEffect(() => {
    ;(async () => {
      if (typeof params.questionId !== 'string') {
        setError(new Error('Invalid ID'))
        return
      }
      const data = await getQuestions(questionIdParam)
      setQuestionId(questionIdParam)
      // error handling
      setQuestions(data!.questions)
    })()
  }, [getQuestions, questionIdParam])

  return {
    questionId: questionIdParam,
    player2Url,
    questions,
    error,
    form,
    player1Submit,
    player2Submit,
    onCopy,
    hasCopied,
  }
}

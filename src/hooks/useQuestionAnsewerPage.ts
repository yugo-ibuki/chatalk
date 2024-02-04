import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { getQuestions } from '@/repositories/getQuestions'
import { useForm } from 'react-hook-form'
import { Question } from '@/models'
import { createAnswer } from '@/repositories/createAnswer'
import { useClipboard } from '@chakra-ui/hooks'
import { checkAnswer } from '@/repositories/checkAnswer'

export const useQuestionAnswerPage = () => {
  // router
  const { push } = useRouter()

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

  const onSubmit = useCallback(
    async (playerType: string) => {
      try {
        const isAnswered = await checkAnswer(questionId)
        await createAnswer(playerType, isAnswered, questionId, form.getValues())
        push(`/${questionId}/result`)
      } catch (err) {
        if (err instanceof Error) {
          setError(err)
        }
        console.error(err)
      }
    },
    [form.getValues, questionId]
  )

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
    onSubmit,
    onCopy,
    hasCopied,
  }
}

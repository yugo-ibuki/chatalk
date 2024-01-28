'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { useQuestionAnswerPage } from '@/hooks/useQuestionAnsewerPage'

const Page = () => {
  const {
    questions,
    error,
    player1Submit,
    form: { formState, register },
  } = useQuestionAnswerPage()
  const params = useParams()
  const questionId = params.questionId

  if (error) return <div>エラーが発生しました</div>

  return (
    <div>
      {questionId && (
        <div className="mt-10 text-center leading-10">
          <div>交流ボードのURL</div>
          <div>
            <p>こちらのリンクを共有してください。</p>
            <Link href={`/${questionId}/player2`} className="text-emerald-600">
              Player 2
            </Link>
          </div>
        </div>
      )}
      <Box margin={'30px auto'} padding={'0 20px'}>
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
          <form>
            {questions.map((question, index) => (
              <Stack key={index} gap={3} marginY={5} width={'400px'}>
                <Text>{question.question}</Text>
                <Input
                  type="text"
                  id={'question' + index}
                  {...register(`question${index.toString()}`, {
                    required: '回答は必須です',
                    maxLength: {
                      value: 100,
                      message: '100文字以内で入力してください',
                    },
                  })}
                />
                {/* エラー */}
                {formState.errors ? (
                  <Text color={'red'}>{formState.errors[`question${index}`]?.message}</Text>
                ) : null}
              </Stack>
            ))}
            <Button marginY={5} isDisabled={!formState.isValid} onClick={player1Submit}>
              回答する
            </Button>
          </form>
        </Stack>
      </Box>
    </div>
  )
}

export default Page

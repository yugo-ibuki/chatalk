'use client'

import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { useQuestionAnsewerPage } from '@/hooks/useQuestionAnsewerPage'

const Page = () => {
  const { questions, error, onSubmit, form } = useQuestionAnsewerPage()
  const { formState, register } = form

  if (error) return <div>エラーが発生しました</div>
  console.log(form.formState.errors)

  return (
    <Box margin={'30px auto'} padding={'0 20px'}>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <form onSubmit={onSubmit}>
          {questions.map((question, index) => (
            <Stack key={index} gap={3} marginY={5} width={'400px'}>
              <Text>{question.question}</Text>
              <Input
                type="text"
                id={'question' + index}
                {...register('question' + index, {
                  maxLength: {
                    value: 100,
                    message: '100文字以内で入力してください',
                  },
                })}
              />
              {/* エラー */}
              {formState.errors['question' + index] ? (
                // @ts-ignore
                <Text color={'red'}>{formState.errors['question' + index]?.message}</Text>
              ) : null}
            </Stack>
          ))}
          <Button type="submit" marginY={5}>
            回答する
          </Button>
        </form>
      </Stack>
    </Box>
  )
}

export default Page

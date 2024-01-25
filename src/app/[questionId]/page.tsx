'use client'

import { Box, Input, Stack, Text } from '@chakra-ui/react'
import { useQuestionAnsewerPage } from '@/hooks/useQuestionAnsewerPage'

const Page = () => {
  const { questions, error } = useQuestionAnsewerPage()

  if (error) return <div>エラーが発生しました</div>

  return (
    <Box margin={'30px auto'}>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
        {questions.map((question, index) => (
          <Stack key={index} gap={3} margin={5}>
            <Text>{question.question}</Text>
            <Input />
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default Page

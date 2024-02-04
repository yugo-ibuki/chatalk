'use client'

import { useResultPage } from '@/hooks/useResultPage'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { AnswerRow } from '@/components/parts/AnswerRow'

const Page = () => {
  const { answers, loading, isBothAnswered } = useResultPage()

  if (loading)
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    )

  return (
    <Box px="3rem">
      {isBothAnswered
        ? answers?.questions.map((answer, i) => (
            <AnswerRow
              key={answer.question + i}
              question={answer.question}
              answer={answer.answer}
            />
          ))
        : '回答が揃っていません。少し待ってから再度アクセスしてください。'}
    </Box>
  )
}

export default Page

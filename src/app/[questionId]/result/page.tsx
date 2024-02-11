'use client'

import { useResultPage } from '@/hooks/useResultPage'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { AnswerRow } from '@/components/parts/AnswerRow'
import Link from 'next/link'

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
      {isBothAnswered && answers?.questions ? (
        <Box>
          {answers?.questions.map((answer, i) => (
            <AnswerRow
              key={answer.question + i}
              question={answer.question}
              answer={answer.answer}
            />
          ))}
          <Box
            sx={{
              textAlign: 'center',
              fontSize: '1rem',
              border: '2px solid #4682b4',
              borderRadius: '0.5rem',
              width: 'fit-content',
              padding: '0.5rem 1rem',
              margin: '4rem auto 0',
            }}
          >
            <Link href="/">もう一度やる</Link>
          </Box>
        </Box>
      ) : (
        '回答が揃っていません。少し待ってから再度アクセスしてください。'
      )}
    </Box>
  )
}

export default Page

'use client'

import { useResultPage } from '@/hooks/useResultPage'
import { Box, Center, Flex, HStack, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AnsweredQuestion } from '@/models'

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

const AnswerRow: FC<{ question: string; answer: AnsweredQuestion }> = ({ question, answer }) => {
  return (
    <Box mt={'4rem'} textAlign={'center'}>
      <Stack gap={2}>
        <Text fontSize={'1.5rem'}>{question}</Text>
        <HStack gap={5} justifyContent={'center'}>
          <Stack w="50%">
            <Text color={'blue'} fontSize={'1.2rem'}>
              Player1 の回答
            </Text>
            <Text fontSize={'1.7rem'}>{answer.player1}</Text>
          </Stack>
          <Stack w="50%">
            <Text color={'blue'} fontSize={'1.2rem'}>
              Player2 の回答
            </Text>
            <Text fontSize={'1.7rem'}>{answer.player2}</Text>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Page

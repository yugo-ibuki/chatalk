'use client'

import { useResultPage } from '@/hooks/useResultPage'
import { useParams } from 'next/navigation'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
  const params = useParams()
  const { answers } = useResultPage({ questionId: params.questionId as string })
  return (
    <div>
      {answers?.questions.map((answer) => (
        <Box key={answer.question} mt={'4rem'} textAlign={'center'}>
          <Stack gap={2}>
            <Text fontSize={'1.5rem'}>{answer.question}</Text>
            <Flex gap={5} justifyContent={'center'}>
              <Stack>
                <Text color={'blue'} fontSize={'1.2rem'}>
                  Player1 の回答
                </Text>
                <Text fontSize={'1.7rem'}>{answer.answer.player1}</Text>
              </Stack>
              <Stack>
                <Text color={'blue'} fontSize={'1.2rem'}>
                  Player2 の回答
                </Text>
                <Text fontSize={'1.7rem'}>{answer.answer.player2}</Text>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      ))}
    </div>
  )
}

export default Page

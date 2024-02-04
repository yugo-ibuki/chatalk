import React, { FC } from 'react'
import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { AnsweredQuestion } from '@/models'

export const AnswerRow: FC<{ question: string; answer: AnsweredQuestion }> = ({
  question,
  answer,
}) => {
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

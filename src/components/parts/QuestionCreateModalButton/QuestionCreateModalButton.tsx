'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { BeforeQuestion } from '@/components/parts'
import { FC, useState } from 'react'
import { createQuestion } from '@/repositories/createQuestion'
import { useRouter } from 'next/navigation'

type Props = {
  setLoading: (isLoading: boolean) => void
}

export const QuestionCreateModalButton: FC<Props> = ({ setLoading }) => {
  const { push } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [questionNumber, setQuestionNumber] = useState<number>(3)

  const onClick = async () => {
    setLoading(true)

    try {
      const id = await createQuestion(questionNumber)
      if (!id) {
        throw new Error('id is not defined')
      }
      onClose()
      push(`/${id}/player1`)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <>
      <Button onClick={onOpen}>交流ボードを作成する</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>交流ボード作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BeforeQuestion setQuestionNumber={setQuestionNumber} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              やめる
            </Button>
            <Button colorScheme="green" onClick={onClick}>
              作成
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

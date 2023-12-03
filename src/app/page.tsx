'use client'

import {
  Box,
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
import { createQuestion } from '@/repositories/createQuestion'
import React from 'react'
import BeforeQuestion from '@/components/parts/BeforeQuestion'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onClick = async () => {
    await createQuestion()
    onClose()
  }

  return (
    <main>
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <Button onClick={onOpen}>交流ボードを作成する</Button>

          <Modal isOpen={isOpen} onClose={onClose} size="sm">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <BeforeQuestion />
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
        </div>
      </div>
    </main>
  )
}

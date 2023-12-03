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
import { createQuestion } from '@/repositories/createQuestion'
import React, { useEffect, useState } from 'react'
import BeforeQuestion from '@/components/parts/BeforeQuestion'
import { getQuestions } from '@/repositories/getQuestions'
import Link from 'next/link'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [questionNumber, setQuestionNumber] = useState<number>(3)
  const [questionId, setQuestionId] = useState<string>('')
  // const [questions, setQuestions] = useState<{ question: string }[]>([])
  const onClick = async () => {
    try {
      console.log(questionNumber)
      const id = await createQuestion(questionNumber)
      if (!id) {
        throw new Error('id is not defined')
      }
      setQuestionId(id)
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   ;(async () => {
  //     const data = await getQuestions(questionId)
  // setQuestions(data!.questions)
  // })()
  // }, [questionNumber, questionId, getQuestions])

  return (
    <main>
      <div className="mt-10">
        <div className="flex justify-center items-center">
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
        </div>

        <div>
          {questionId && (
            <div className="mt-10 text-center leading-10">
              <div>交流ボードのURL</div>
              <div>
                こちらのリンクを共有してください。
                <Link href={`/${questionId}`} className="text-emerald-600">
                  {window.document.URL}
                  {questionId}
                </Link>
              </div>
            </div>
          )}
          {/*{questions.map((question, index) => (*/}
          {/*  <div key={index}>*/}
          {/*    <div>{question.question}</div>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
    </main>
  )
}

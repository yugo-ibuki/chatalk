'use client'

import React, { useState } from 'react'
import { QuestionCreateModalButton } from '@/components/parts'
import { Center, Spinner } from '@chakra-ui/react'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <main>
      <div className="mt-10">
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <div className="flex justify-center items-center">
            <QuestionCreateModalButton setLoading={setLoading} />
          </div>
        )}
      </div>
    </main>
  )
}

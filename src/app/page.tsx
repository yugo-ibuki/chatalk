'use client'

import { QuestionCreateModalButton } from '@/components/parts'
import { Center, Spinner } from '@chakra-ui/react'
import { useTopPage } from '@/hooks/useTopPage'

export default function TopPage() {
  const { loading, setLoading } = useTopPage()

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

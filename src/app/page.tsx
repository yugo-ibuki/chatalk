'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { QuestionCreateModalButton } from '@/components/parts'

export default function Home() {
  const [questionId, setQuestionId] = useState<string>('')

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
          <QuestionCreateModalButton setQuestionId={setQuestionId} />
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
        </div>
      </div>
    </main>
  )
}

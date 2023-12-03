import { addDoc, collection, db, serverTimestamp } from '@/libs/firebase'
import { collections } from '@/config/firebase'
import { getRandomQuestions } from '@/libs/getRandomQuestions'

export const createQuestion = async (questionNumber: number) => {
  try {
    const selectedQuestions = getRandomQuestions(questionNumber)
    const res = await addDoc(collection(db, collections.BOARDS), {
      questions: selectedQuestions,
      timestamp: serverTimestamp(),
    })
    return res.id
  } catch (err) {
    console.error(err)
  }
}

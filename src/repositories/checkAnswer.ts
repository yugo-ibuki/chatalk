import { db, doc, getDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'

export const checkAnswer = async (questionId: string) => {
  try {
    const docRef = doc(db, collections.ANSWERS, questionId)
    const docSnap = await getDoc(docRef)
    return docSnap.exists()
  } catch (err) {
    console.error(err)
    throw new Error('送信時にエラーが発生しました。もう一度お試しください。')
  }
}

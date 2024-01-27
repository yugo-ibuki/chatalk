import { db, doc, getDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'

export const checkAnswer = async (questionId: string) => {
  try {
    const docRef = doc(db, collections.ANSWERS, questionId)
    const docSnap = await getDoc(docRef)
    return docSnap.exists()
  } catch (err) {
    console.error(err)
  }
}

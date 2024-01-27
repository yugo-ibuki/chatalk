import { setDoc, db, serverTimestamp, doc, updateDoc, collection, addDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'
import { Question } from '@/models'

export const createAnswer = async (player: string, questionId: string, answers: Question) => {
  try {
    const docRef = doc(db, collections.ANSWERS, questionId)
    const data = {
      [player]: answers,
      timestamp: serverTimestamp(),
    }
    player === 'player1' ? await setDoc(docRef, data) : await updateDoc(docRef, data)
  } catch (err) {
    console.error(err)
  }
}

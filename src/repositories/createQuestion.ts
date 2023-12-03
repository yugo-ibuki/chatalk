import { Question } from '@/models'
import { addDoc, collection, db, serverTimestamp } from '@/libs/firebase'
import { collections } from '@/config/firebase'

export const createQuestion = async () => {
  try {
    const res = await addDoc(collection(db, collections.BOARDS), {
      timestamp: serverTimestamp(),
    })
  } catch (err) {
    console.log(err)
  }
}

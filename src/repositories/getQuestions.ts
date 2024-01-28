import { doc, db, getDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'

export const getQuestions = async (docId: string) => {
  const docRef = doc(db, collections.BOARDS, docId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    return {
      id: docSnap.id,
      questions: [...docSnap.data()?.questions],
    }
  } else {
    console.log('No such document!')
    return null
  }
}

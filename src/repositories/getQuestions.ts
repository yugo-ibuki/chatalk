import { doc, db, getDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'

export const getQuestions = async (docId: string) => {
  const docRef = doc(db, collections.BOARDS, docId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

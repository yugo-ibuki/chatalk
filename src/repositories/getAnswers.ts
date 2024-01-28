import { db, doc, getDoc } from '@/libs/firebase'
import { collections } from '@/config/firebase'

type Props = {
  questionId: string
}

export const getAnswers = async ({ questionId }: Props) => {
  const docRef = doc(db, collections.ANSWERS, questionId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      player1: docSnap.data()?.player1,
      player2: docSnap.data()?.player2,
    }
  } else {
    console.log('No such document!')
    return null
  }
}

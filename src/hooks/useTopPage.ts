'use client'

import { useState } from 'react'

export const useTopPage = () => {
  const [loading, setLoading] = useState<boolean>(false)

  return {
    loading,
    setLoading,
  }
}

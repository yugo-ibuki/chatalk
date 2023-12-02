'use client'

import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const Provider = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default Provider

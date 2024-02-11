'use client'

import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <Text align="center">
        ©{year}{' '}
        <Link href="https://twitter.com/ugo_ev" target="_blank">
          Ugo
        </Link>
      </Text>
    </footer>
  )
}

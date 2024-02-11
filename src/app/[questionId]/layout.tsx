import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        padding: '20px 0',
      }}
    >
      {children}
    </Box>
  )
}

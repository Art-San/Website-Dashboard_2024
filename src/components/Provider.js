'use client'

import { SessionProvider } from 'next-auth/react'

export const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

// про этот client вариант рассказывает на 08:40 https://www.youtube.com/watch?v=fDesagJgw3w&t=206s

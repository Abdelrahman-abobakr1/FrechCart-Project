"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function MySession({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider
      session={null}
      refetchInterval={5 * 60} // Refetch session every 5 minutes
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  )
}

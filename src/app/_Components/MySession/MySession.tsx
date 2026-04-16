'use client'

import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import React from 'react'

export default function MySession({ children, session }: { children: React.ReactNode; session: Session | null }) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={5 * 60} // Refetch session every 5 minutes
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  )
}

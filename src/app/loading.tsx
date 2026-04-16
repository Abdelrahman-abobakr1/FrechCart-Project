import { Spinner } from '@/components/ui/spinner'
import { div } from 'framer-motion/client'
import React from 'react'

export default function loading() {
  return (
      <div className='h-screen bg-red flex justify-center items-center'>
           <Spinner  className='size-8'/>
</div>
  )
}

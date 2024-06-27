import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen gap-y-4'>
      <div className='text-5xl font-bold'>
         Press Button to get started 
      </div>
      <Button asChild size={'lg'}>
        <Link href={'/home'}> get started</Link>
      </Button>
    </main>
  )
}

export default HomePage
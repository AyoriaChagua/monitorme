import { SelectLab } from '@/components'
import Image from 'next/image'
import React from 'react'



export default function LabsPage() {
  return (
    <div className='flex flex-col h-screen  justify-center items-center gap-14'>
      <Image
        alt='logo'
        src={'/img/logo-outline.png'}
        width={150}
        height={150}
      />
      <h2 className='text-blue-500 font-bold text-3xl'>Select class lab</h2>
      <SelectLab />
    </div>
  )
}

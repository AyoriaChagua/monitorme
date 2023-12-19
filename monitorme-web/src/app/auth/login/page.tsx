import React from 'react'
import { CustomFormLogin, WelcomeLogin } from '@/components'
export default function LoginPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='md:order-2'>
        <WelcomeLogin />
      </div>
      <div className='md:order-1'>
        <CustomFormLogin />
      </div>
    </div>
  );
}

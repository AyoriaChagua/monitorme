<<<<<<< HEAD
'use client'
import { CustomAdminNav, CustomButton, CustomNav, CustomTable } from '@/components';
import React from 'react';
import { signOut } from 'next-auth/react';

export default function TeacherDashboardPage() {

  return (
    <div>
      <div>
        <CustomNav />
      </div>
      <div className='flex flex-row'>
        <div>
          <CustomAdminNav />
        </div>
        <div className='flex flex-col m-5 items-center w-full gap-y-5'>
          <div className='flex mb-4'>
            <h1 className='text-blue-500 font-bold text-xl flex items-center justify-center'>
              Laboratory computers 1504
            </h1>
          </div>
          <CustomTable />
        </div>
      </div>
    </div>
=======
import React from 'react'

export default function TeacherDashboardPage() {
  return (
    <div>TeacherDashboardPage</div>
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
  )
}

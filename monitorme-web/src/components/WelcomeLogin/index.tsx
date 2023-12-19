'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import signin from '@/../public/lottie/singin.json';


export default function WelcomeLogin() {
    return (
        <div className='h-screen bg-gradient-to-r from-blue-400 to-blue-500 flex flex-col justify-center items-center gap-10'>
            <div className='flex justify-center items-center'>
                <Image
                    src={"/img/logo.png"}
                    width={100}
                    height={100}
                    alt='Monitorme logo'
                />
            </div>
            <div className='flex justify-center items-center text-center'>
                <h1 className='text-3xl font-bold text-white'>Welcome to Monitorme</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-52 h-1.5 bg-white' />
            </div>
            <div className='text-center'>
                <p className='text-white whitespace-pre-line'>There was a lot of activity these days,{`\n`} look at what the students have been doing during class hours</p>
            </div>
            <div className='w-1/3'>
                <Lottie animationData={signin} loop={false} />
            </div>
        </div>
    );
}

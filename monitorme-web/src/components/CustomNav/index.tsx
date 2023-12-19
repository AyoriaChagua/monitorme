import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function CustomNav() {
    return (
        <nav className="bg-blue-500 p-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className=' flex items-center gap-x-5'>
                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <h2 className='text-white font-light text-xl'>Monitorme</h2>
                </div>
                <div className="flex space-x-4">
                    <Link href="/">
                        <p className="text-white">Ayoria Chagua</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

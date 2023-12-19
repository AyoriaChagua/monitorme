import React from 'react';

interface Props {
    readonly title: string
    readonly children: React.ReactNode
}
export default function ContainerForm({ children, title }: Props) {
    return (
        <div className='w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-md rounded-lg py-5 px-7'>
            <div>
                <h3 className='red text-3xl text-gray-700 font-bold pb-5'>{title}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

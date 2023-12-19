import React from 'react';

interface Props {
    readonly title?: string
    readonly children: React.ReactNode
}
export default function ContainerForm({ children, title }: Props) {
    return (
        <div className='w-full shadow-md rounded-lg py-5 px-7'>
            {
                title ? (<div className='flex flex-row justify-between items-center pb-5'>
                    <h3 className='red text-3xl text-blue-400 font-bold '>{title}</h3>
                </div>) : <></>
            }
            <div>
                {children}
            </div>
        </div>
    )
}

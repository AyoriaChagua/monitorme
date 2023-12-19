import React from 'react';

interface Props {
<<<<<<< HEAD
    readonly title?: string
=======
    readonly title: string
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
    readonly children: React.ReactNode
}
export default function ContainerForm({ children, title }: Props) {
    return (
<<<<<<< HEAD
        <div className='w-full shadow-md rounded-lg py-5 px-7'>
            {
                title ? (<div className='flex flex-row justify-between items-center pb-5'>
                    <h3 className='red text-3xl text-blue-400 font-bold '>{title}</h3>
                </div>) : <></>
            }
=======
        <div className='w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-md rounded-lg py-5 px-7'>
            <div>
                <h3 className='red text-3xl text-gray-700 font-bold pb-5'>{title}</h3>
            </div>
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
            <div>
                {children}
            </div>
        </div>
    )
}

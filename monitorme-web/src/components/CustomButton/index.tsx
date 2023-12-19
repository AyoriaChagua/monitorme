import React from 'react'

interface Props {
    readonly text: string
    readonly onClick: () => void
}
export default function CustomButton({text, onClick}: Props) {
    return (
        <button
            onClick={onClick}
            className='bg-white text-blue-500 border-blue-500 border-2 rounded-md px-3 py-1 hover:bg-blue-100'>
            {text}
        </button>
    )
}

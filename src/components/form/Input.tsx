import React from 'react'

type InputType = React.ComponentProps<'input'> & {
    id?: string;
    label?: string;
}

const Input = ({ id, label, ...props }: InputType) => {
    return (
        <div className='block mb-6'>
            <label htmlFor={id} className='block mb-1'>{label}</label>
            <input id={id} {...props} className='border border-gray-400 w-full py-3 px-2' />
        </div>
    )
}

export default Input

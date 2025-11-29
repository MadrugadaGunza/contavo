import React from 'react';

type TextareatType = React.ComponentProps<"textarea"> & {
    id?: string;
    label?: string;
}

const TextArea = ({ id, label, ...props }: TextareatType) => {
    return (
        <div className='block mb-6'>
            <label htmlFor={id} className='block mb-1'>{label}</label>
            <textarea id={id} {...props} className='border border-gray-400 w-full py-3 px-2 outline-0'></textarea>
        </div>
    )
}

export default TextArea

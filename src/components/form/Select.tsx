import React from 'react'

type Option = {
    value: string;
    label: string;
}

type SelectType = React.ComponentProps<'select'> & {
    id?: string;
    label?: string;
    options?: Option[];
}

const Select = ({ id, label, options = [], ...props }: SelectType) => {
    return (
        <div className='block mb-6'>
            {label && (<label htmlFor={id} className="block mb-1">{label}</label>)}

            <select id={id} {...props} className="border border-gray-400 w-full py-3 px-2 outline-0">
                <option value="">Selecione uma opção</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;

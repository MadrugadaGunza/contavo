import styles from './Input.module.css';
import React from 'react';

type InputType = React.ComponentProps<'input'> & {
    label?: string;
    id?: string;
}

const Input = ({ label, id, ...props }: InputType) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input {...props} id={id} />
        </div>
    )
}

export default Input

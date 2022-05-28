import React, {useId} from 'react';
import styles from './_input.module.scss';


const Input = ({type, value, placeholder, ...rest}) => {

    const id = useId();

    return (
        <span>
            <input
                id={id}
                type={type}
                className={styles.input}
                value={value}
                {...rest}
            />
            <label htmlFor={id} className={(value ? [styles.label, styles.active].join(' ') : styles.label)}>
                {placeholder}
            </label>
        </span>
    );
};

export default Input;

import React, {useId, useState} from 'react';
import styles from './_input.module.scss';


const Input = ({type, value, placeholder, ...rest}) => {

    const [inp, setInp] = useState(value || null);
    const id = useId();

    return (
        <span>
            <input
                id={id}
                type={type}
                className={styles.input}
                onChange={e => setInp(e.target.value)}
                value={inp}
                {...rest}
            />
            <label htmlFor={id} className={(inp ? [styles.label, styles.active].join(' ') : styles.label)}>
                {placeholder}
            </label>
        </span>
    );
};

export default Input;

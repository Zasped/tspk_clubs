import React, {useId, useState} from 'react';
import './_input.scss';


const Input = ({type, value, placeholder, ...rest}) => {

    const [inp, setInp] = useState(value || null);
    const id = useId();

    return (
        <span>

            <input
                id={id}
                type={type}
                {...rest}
                className={'input'}
                onChange={e => setInp(e.target.value)}
                value={inp}
            />
            <label htmlFor={id} className={(inp ? 'label active' : 'label')}>
                {placeholder}
            </label>
        </span>
    );
};

export default Input;

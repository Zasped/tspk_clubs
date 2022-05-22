import React, {useState} from 'react';
import './_input.scss';


const Input = ({type, value, placeholder, ...rest}) => {

    const [inp, setInp] = useState(value || null);

    return (
        <input
            type={type}
            {...rest}
            className={'input'}
            onChange={e => setInp(e.target.value)}
            value={inp}
        />
    );
};

export default Input;
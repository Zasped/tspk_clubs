import React from 'react';
import './_button.scss';

const Button = ({title, classes, ...rest}) => {
    return (
        <button className={['btn', classes].join(' ')} {...rest}>{title}</button>
    );
};

export default Button;
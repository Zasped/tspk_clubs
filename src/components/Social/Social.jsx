import React from 'react';
import './_social.scss';

const Social = ({icon, link}) => {
    return (
        <a href={link} className={'social'}>
            <img src={icon} alt=""/>
        </a>
    );
};

export default Social;
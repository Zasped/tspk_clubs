import React from 'react';
import styles from './_subtitle.module.scss';

const Subtitle = ({children, classNames, fontColor}) => {

    return (
        <p
            className={(classNames) ? [styles.subtitle, classNames].join(' ') : styles.subtitle}
            style={{color: fontColor}}
        >
            {children}
        </p>
    );
};

export default Subtitle;

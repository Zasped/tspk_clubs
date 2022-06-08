import React from 'react';
import styles from './_title.module.scss';

const Title = ({title, classNames}) => {
    return (
        <h1 className={(classNames) ? [styles.title, classNames].join(' ') : styles.title}>{title}</h1>
    );
};

export default Title;

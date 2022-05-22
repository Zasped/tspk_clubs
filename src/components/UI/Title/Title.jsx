import React from 'react';
import styles from './_title.module.scss';

const Title = ({title, fontSize, fontColor}) => {
    return (
        <h1 className={styles.title} style={{fontSize: fontSize, color: fontColor}}>{title}</h1>
    );
};

export default Title;

import React from 'react';
import styles from './_subtitle.module.scss';

const Subtitle = ({children, fontColor}) => {
    return (
        <p className={styles.subtitle} style={{color: fontColor}}>{children}</p>
    );
};

export default Subtitle;

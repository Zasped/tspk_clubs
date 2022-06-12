import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './_menuLinks.module.scss';

const MenuLinks = ({text, icon, style}) => {
    return (
        <div className={styles.block__item} style={style}>
            <div className={styles.block__item__image}>
                <FontAwesomeIcon icon={icon} size={"1x"} className={styles.icon} color={'#fff'}/>
            </div>
            <p className={styles.block__item__text}>
                {text}
            </p>
        </div>
    );
};

export default MenuLinks;

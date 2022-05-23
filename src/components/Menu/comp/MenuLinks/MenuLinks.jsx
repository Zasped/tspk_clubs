import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './_menuLinks.module.scss';

const MenuLinks = ({text, icon}) => {
    return (
        <div className={styles.block__item}>
            <FontAwesomeIcon icon={icon} size={"1x"} className={styles.block__item__image} color={'#fff'}/>
            <p className={styles.block__item__text}>
                {text}
            </p>
        </div>
    );
};

export default MenuLinks;

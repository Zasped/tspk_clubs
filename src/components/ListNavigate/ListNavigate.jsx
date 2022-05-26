import React from 'react';
import styles from './_listnavigate.module.scss';
import {NavLink} from "react-router-dom";

const ListNavigate = ({elements}) => {

    const activeLink = ({isActive}) => isActive ? [styles.list_item, styles.active].join(' ') : styles.list_item;

    return (
        <ul className={styles.list}>
            {elements.map((el, index) =>
                <li key={index}>
                    <NavLink to={'./' + (index + 1)} className={activeLink}>{el.body}</NavLink>
                </li>
            )}
        </ul>
    );
};

export default ListNavigate;

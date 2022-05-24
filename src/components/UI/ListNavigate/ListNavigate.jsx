import React from 'react';
import styles from './_listnavigate.module.scss';

const ListNavigate = ({elements}) => {
    return (
        <ul className={styles.list}>
            {elements.map((el, index) =>
                <li
                    key={index}
                    className={(index === 0) ? [styles.list_item, styles.active].join(' ') : styles.list_item}
                >
                    {el.body}
                </li>
            )}
        </ul>
    );
};

export default ListNavigate;

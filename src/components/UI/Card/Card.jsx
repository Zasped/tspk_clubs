import React from 'react';
import styles from './_card.module.scss'
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";

const Card = ({title, children, style, fontSizeTitle, fontColorTitle, fontColorDesc}) => {
    return (
        <div className={styles.card} style={style}>
            <Title title={title} fontSize={fontSizeTitle} fontColor={fontColorTitle}/>
            <Subtitle fontColor={fontColorDesc}>
                {children}
            </Subtitle>
        </div>
    );
};

export default Card;

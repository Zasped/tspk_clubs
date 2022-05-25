import React from 'react';
import styles from './_groupTimeTable.module.scss';

const GroupTimeTable = ({title, lessons}) => {

    // const arrStart = ['8:30', '10:20', '12:25', '14:05', '15:40'];
    // const arrEnd = ['10:00', '11:50', '13:55', '15:35', '17:10'];
    const time = {
        arrStart: ['8:30', '10:20', '12:25', '14:05', '15:40'],
        arrEnd: ['10:00', '11:50', '13:55', '15:35', '17:10']
    }

    return (
        <div className={styles.groupItem}>
            <div className={styles.group__title}>
                {title}
            </div>
            <div className={styles.group__lessons}>
                {lessons.map((item, index) =>
                    <div className={styles.group__lessons__item}>
                        <div className={styles.number__lesson}><span>{index+1}</span></div>
                        <div className={styles.time__lesson}>
                            <div className={styles.time__lesson__start}>{time.arrStart[index]}</div>
                            <div className={styles.time__lesson__end}>{time.arrEnd[index]}</div>
                        </div>
                        <div className={styles.name__lesson}>{item.name}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GroupTimeTable;

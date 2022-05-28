import React from 'react';
import styles from './_groupTimeTable.module.scss';

const GroupTimeTable = ({title, lessons}) => {

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
                {lessons.map((item, index) => {
                    return <div className={styles.group__lessons__item} key={item.id}>
                        <div className={styles.number__lesson}><span>{item.schedule.position}</span></div>
                        <div className={styles.time__lesson}>
                            <div
                                className={styles.time__lesson__start}>{item.schedule.start.replace(':00', '')}</div>
                            <div className={styles.time__lesson__end}>{item.schedule.end.replace(':00', '')}</div>
                        </div>
                        <div className={styles.name__lesson}>
                            {item.lesson.name}
                            <br/>
                            {item.teacher.first_name + ' ' + item.teacher.last_name}{' Каб.'}{item.cabinet.name}
                        </div>
                    </div>

                })}
            </div>
        </div>
    );
};

export default GroupTimeTable;

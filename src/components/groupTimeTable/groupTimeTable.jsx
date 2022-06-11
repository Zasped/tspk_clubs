import React, {useState} from 'react';
import './_groupTimeTable.scss';

const GroupTimeTable = ({title, time, lessons}) => {

    const [lessonsGroup, setLessonsGroup] = useState(lessons);
    const [currentLesson, setCurrentLesson] = useState(null);

    function dragStartHandler(e, item) {
        setCurrentLesson(item)
    }

    function dragEndHandler(e) {
        e.target.style.background = 'transparent';
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'lightgray';
    }

    function dropHandler(e, item) {
        e.preventDefault();
        setLessonsGroup(lessonsGroup.map((el) => {
            if (el.position === item.position){
                return {...el, position: currentLesson.position}
            }
            if (el.position === currentLesson.position){
                return {...el, position: item.position}
            }
        }))
        e.target.style.background = 'transparent';
    }

    const sortLesson = (a, b) => {
        if (a.position > b.position){
            return 1;
        }else{
            return -1;
        }
    }

    return (
        <div className={'groupItem'}>
            <div className={'group__title'}>
                {title}
            </div>
            <div className={'group__lessons'}>
                {lessonsGroup.sort(sortLesson).map((item, index) =>
                    <div
                        className={'group__lessons__item'}
                        key={item.id}
                    >
                        <div className={'number__lesson'}><span>{time.position}</span></div>
                        <div className={'time__lesson'}>
                            <div className={'time__lesson__start'}>{time[index].startTime}</div>
                            <div className={'time__lesson__end'}>{time[index].endTime}</div>
                        </div>
                        <div className={'name__lesson'}
                             draggable={true}
                             onDragStart={e => dragStartHandler(e, item)}
                             onDragLeave={e => dragEndHandler(e)}
                             onDragEnd={e => dragEndHandler(e)}
                             onDragOver={e => dragOverHandler(e)}
                             onDrop={e => dropHandler(e, item)}
                        >
                            {item.lesson}
                            <br/>
                            {item.teacher} {item.cabinet}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GroupTimeTable;

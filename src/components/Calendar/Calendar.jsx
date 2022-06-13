import React from 'react';
import './_calendar.scss';

const Calendar = () => {

    const date = new Date();
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let currentMonth = months[date.getMonth()];

    currentMonth = (date.getMonth() !== 7) ? currentMonth.slice(0, currentMonth.length - 1) + 'я' : currentMonth + 'а';

    const days = []

    for (let i = 0; i < new Date(date.getFullYear(), date.getMonth(), 0).getDay(); i++) {
        days.push(<div className="day__item" key={i+100}/>);
    }

    for (let i = 0; i < new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); i++) {
        if (i === date.getDate()-1) {
            days.push(<div className="day__item current" key={i}>{i+1}</div>);
        } else {
            days.push(<div className="day__item" key={i}>{i+1}</div>);
        }
    }

    return (
        <div className='calendar-container'>
            <div className="title-cldr">
                <div className="title-cldr__top">
                    <p className="month">{months[date.getMonth()]}</p>
                    <div className="year">{date.getFullYear()}</div>
                </div>
                <div className="title-cldr__bottom">
                    <p className="day-of-week">
                        {daysOfWeek[date.getDay()]}
                    </p>
                    <p className="current-day">
                        {date.getDate()} {currentMonth}
                    </p>
                </div>
            </div>
            <div className="body-cldr">
                <div className="body-cldr__head">
                    <div className="days-of-week__list">
                        <div className="days-of-week__item">Пн</div>
                        <div className="days-of-week__item">Вт</div>
                        <div className="days-of-week__item">Ср</div>
                        <div className="days-of-week__item">Чт</div>
                        <div className="days-of-week__item">Пт</div>
                        <div className="days-of-week__item">Сб</div>
                        <div className="days-of-week__item">Вс</div>
                    </div>
                </div>
                <div className="body-cldr__body">
                    <div className="day__list">
                        {days.map(el =>
                            el
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
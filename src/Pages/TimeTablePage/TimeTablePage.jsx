import React from 'react';
import './_timeTablePage.scss';
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";

const TimeTablePage = () => {
    return (
        <div className={'container'}>
            <div className="wrapper">
                <div className="wrapper__column left">
                    <div className="title">
                        <Title title={'Расписание'} />
                    </div>
                    <div className="subtitle">
                        <Subtitle>
                            По стандарту показывается расписание на текущий день, но если присутствует расписание на следующий день то будет показано оно.
                        </Subtitle>
                    </div>
                    <div className="cldr">
                        Календарь
                    </div>
                </div>
                <div className="wrapper__column right">
                    <div className="groupTimeTable">
                        <div className="group__title">
                            YR-21
                        </div>
                        <div className="group__lessons">
                            <div className="group__lessons__item">
                                <div className="number__lesson">1</div>
                                <div className="time__lesson">
                                    <div className="time__lesson__start">8:30</div>
                                    <div className="time__lesson__end">10:00</div>
                                </div>
                                <div className="name__lesson">
                                    " Разработка веб-приложений
                                    Шаров С.А. каб.207"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTablePage;

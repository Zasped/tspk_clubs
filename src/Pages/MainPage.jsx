import React from 'react';
import Card from "../components/UI/Card/Card";
import cubs from "../assets/images/cubs.svg";
import calendar from "../assets/images/calendar.svg";
import romb from "../assets/images/romb.svg";
import ClubsBySpecialty from "../assets/images/ClubsBySpecialty.png";
import ListNavigate from "../components/UI/ListNavigate/ListNavigate";

const MainPage = () => {
    return (
        <div className="flex mainPage_flex">
            <div
                className="column mainPage_column"
                style={{}}
            >
                <Card
                    title={'SCREENSAVER'}
                    desc={'Основной задачи проекта является структуризация клубов и их работ, а так же для более удобного учёт для преподователей.'}
                />
                <div className={"fast__nav"}>
                    <h1 className={'fast__nav__title'}>Быстрая навигация</h1>
                    <div className={"images"}>
                        <img src={cubs} alt="cubs" className={"images__item"}/>
                        <img src={calendar} alt="calendar" className={"images__item"}/>
                        <img src={romb} alt="romb" className={"images__item"}/>
                    </div>
                </div>
            </div>
            <div className="column mainPage_column">
                <div className="flex" style={{justifyContent: "space-between"}}>
                    <div className="ClubsBySpecialty">
                        <img src={ClubsBySpecialty} alt=""/>
                        <p className="ClubsBySpecialty__title">Клубы по специальностям</p>
                    </div>
                    <ListNavigate
                        elements={[
                            {body: 'Клубы-по-специальностям'},
                            {body: 'Практическое-применение'},
                            {body: 'Расписание-API'},
                        ]}
                    />
                </div>
                <div className={'subtitle__block'}>
                    <span className={'subtitle__text'}>
                        Место встречи людей с едиными интересами для определённого вида деятельности в рамках той или иной профессии (Специальности). Хобби.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

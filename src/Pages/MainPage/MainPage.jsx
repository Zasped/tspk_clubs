import React from 'react';
import './_mainPage.scss';
import Card from "../../components/UI/Card/Card";
import romb from "../../assets/images/romb.svg";
import ClubsBySpecialty from "../../assets/images/ClubsBySpecialty.png";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faArrowUp,
    faCalendarDays,
    faCubesStacked,
} from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../../layout/MainLayout/MainLayout";

const MainPage = () => {
    return (
        <MainLayout>
            <div className="flex mainPage_flex">

                <div className="column mainPage_column">
                    <div className="page__title">
                        <Card
                            fontSizeTitle={'24px'}
                            title={'SCREENSAVER'}
                            children={'Основной задачи проекта является структуризация клубов и их работ, а так же для более удобного учёт для преподователей.'}
                        />
                    </div>
                    <div className={"fast__nav"}>
                        <h1 className={'fast__nav__title'}>Быстрая навигация</h1>
                        <div className={"images"}>
                            <FontAwesomeIcon icon={faCubesStacked} size={"1x"} className={'images__item'}
                                             color={'#fff'}/>
                            <FontAwesomeIcon icon={faCalendarDays} size={'1x'} className={'images__item'}
                                             color={'#fff'}/>
                            <img src={romb} alt="" className={'images__item'}/>
                        </div>
                    </div>
                </div>

                <div className="column mainPage_column">
                    <div className="left_col">
                        <div className="flex">
                            <div className="ClubsBySpecialty">
                                <div className="clubImg">
                                    <img src={ClubsBySpecialty} alt=""/>
                                </div>
                                <p className="ClubsBySpecialty__title">Клубы по специальностям</p>
                            </div>
                            <div className="navList">
                                <ListNavigate
                                    elements={[
                                        {body: 'Клубы-по-специальностям'},
                                        {body: 'Практическое-применение'},
                                        {body: 'Расписание-http'},
                                    ]}
                                />
                            </div>
                        </div>
                        <div className={'subtitle__block'}>
                            <p className={'subtitle__text'}>
                                Место встречи людей с едиными интересами для определённого вида деятельности в рамках
                                той
                                или иной профессии (Специальности). <span>Хобби.</span>
                            </p>
                            <div className="subtitle__arrows">
                                <FontAwesomeIcon icon={faArrowUp} size={'2x'} color={'#5E5A60'} className={'arrow'}/>
                                <FontAwesomeIcon icon={faArrowDown} size={'2x'} color={'#5E5A60'} className={'arrow'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MainPage;

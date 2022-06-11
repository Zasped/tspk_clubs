import React from 'react';
import './_mainPage.scss';
import hive from "../../assets/images/romb.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faCubesStacked, faInfo} from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Accordion from "../../components/Accordion/Accordion";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import akame from "../../assets/images/akamepng.png";
import ashuramaru from "../../assets/images/ashuramaru.png";
import telka from "../../assets/images/telka.png";


const MainPage = () => {
    return (
        <MainLayout>
            <div className="flex mainPage_flex">

                <div className="column mainPage_column">
                    <div className="title">
                        <Title title={'SCREENSAVER'}/>
                    </div>
                    <div className="subtitle">
                        <div className="subtitle__item">
                            <Subtitle>
                                Просто скринсейвер, проект разработанный для удобного взаимодействия клубов и учеников, а
                                так же разработаны интерфейсы для более удобного взаимодействия с некоторыми задачами.
                            </Subtitle>
                        </div>
                        <div className="subtitle__item">

                        </div>
                    </div>
                    <div className={"fast__nav"}>
                        <div className="fast__nav__item">
                            <h1 className={'fast__nav__item__title'}>Быстрая навигация</h1>
                            <div className={"images"}>
                                <div className="images__item"><FontAwesomeIcon icon={faCubesStacked} size={"1x"}
                                                                               className={'icon'} color={'#fff'}/></div>
                                <div className="images__item"><FontAwesomeIcon icon={faCalendarDays} size={'1x'}
                                                                               className={'icon'} color={'#fff'}/></div>
                                <div className="images__item"><img src={hive} alt="" className={'icon'}/></div>
                            </div>
                        </div>
                        <div className="fast__nav__item">

                        </div>
                    </div>
                    <Accordion
                        data={[
                            {
                                title: 'Расписание',
                                body: 'Разработан интерфейс для создания редактирование расписание занятий колледжа, подробная статистика о количестве проведённых занятий, удобная сортировка поиск определённой группы и возможность получить доступ к данный c помощью REST API. Подробну документацию по использованию API в личной кабинете.',
                                icon: faCalendarDays,
                            },
                            {
                                title: 'Клубы',
                                body: 'Разработан интерфейс для создания редактирование расписание занятий колледжа, подробная статистика о количестве проведённых занятий, удобная сортировка поиск определённой группы и возможность получить доступ к данный c помощью REST API. Подробну документацию по использованию API в личной кабинете.',
                                icon: faCubesStacked,
                            },
                            {
                                title: 'Информация',
                                body: 'Разработан интерфейс для создания редактирование расписание занятий колледжа, подробная статистика о количестве проведённых занятий, удобная сортировка поиск определённой группы и возможность получить доступ к данный c помощью REST API. Подробну документацию по использованию API в личной кабинете.',
                                icon: faInfo,
                            }
                        ]}
                    />
                </div>

                <div className="column mainPage_column">
                    <div className="images">
                        <div className="images__item"><img src={akame} alt=""/></div>
                        <div className="images__item"><img src={ashuramaru} alt=""/></div>
                        <div className="images__item"><img src={telka} alt=""/></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MainPage;

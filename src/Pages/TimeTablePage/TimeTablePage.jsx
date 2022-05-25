import React from 'react';
import './_timeTablePage.scss';
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import GroupTimeTable from "../../components/groupTimeTable/groupTimeTable";

const TimeTablePage = () => {
    return (
        <div className={'container'}>
            <div className="wrapper">
                <div className="wrapper__column left">
                    <div className="title">
                        <Title title={'Расписание'}/>
                    </div>
                    <div className="subtitle">
                        <Subtitle>
                            По стандарту показывается расписание на текущий день, но если присутствует расписание на
                            следующий день то будет показано оно.
                        </Subtitle>
                    </div>
                    <div className="cldr">
                        Календарь
                    </div>
                </div>
                <div className="wrapper__column right">

                    <div className="groupTimeTable">

                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'МДК 02.01 Теор. и метод. осн. организ. игровой деятельности Абрамова О.А. (дистанц.)'},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                                {name: null},
                            ]}
                        /><GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                        <GroupTimeTable
                            title={'qwe-21'}
                            lessons={[
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: 'Разработка веб-приложений Шаров С.А. каб.207'},
                                {name: null},
                            ]}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TimeTablePage;

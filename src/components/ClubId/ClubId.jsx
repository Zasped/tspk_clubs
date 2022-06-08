import React from 'react';
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import {useOutletContext, useParams} from "react-router-dom";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

const ClubId = () => {

    const infoClub = useOutletContext();

    return (
        <>
            <div className="page__title">
                <Title title={infoClub.name} classNames={['title']}/>
            </div>

            <div className={"description__club"}>
                <div className="description__club__top">
                    <div className="description__club__top__column">
                        <Subtitle classNames={['description']}>
                            {infoClub.description}
                        </Subtitle>
                        <div className="info__leaders">
                            <div className="leader">
                                <Title title={'Ведущий'}/>
                                <Subtitle classNames={['name']}>
                                    asuramesocrum
                                </Subtitle>
                            </div>
                            <div className="tutor">
                                <Title title={'Куратор'}/>
                                <Subtitle classNames={['name']}>
                                    asuramesocrum
                                </Subtitle>
                            </div>
                        </div>
                    </div>
                    <div className="description__club__top__column">
                        <div className="club__schedule">
                            <Title title={'Расписание занятий'}/>
                            <Subtitle>
                                <div className="text">
                                    <p>
                                        Занятия проходят в еженедельной форме в определённой аудитории, оффициальный график предоставлен ниже.
                                    </p>
                                    <p>
                                        График не зависит от оффициального графика, место его проведения и время встреч может быть изменено руководящим отделением.
                                    </p>
                                </div>
                                <hr/>
                                <div className="days">
                                    <div className="day active">пн</div>
                                    <div className="day">вт</div>
                                    <div className="day">ср</div>
                                    <div className="day">чт</div>
                                    <div className="day">пт</div>
                                    <div className="day">сб</div>
                                    <div className="day">вс</div>
                                </div>
                            </Subtitle>
                        </div>
                    </div>
                </div>
                <div className="description__club__bottom">
                    <div className="description__club__bottom__column">
                        <div className="links">
                            <Title title={'Ссылки'}/>
                            <Subtitle classNames={['links__list']}>
                                <a href={'#'} className={'social'}>
                                    <img src={discord} alt=""/>
                                </a>
                                <a href={'#'} className={'social'}>
                                    <img src={vk} alt=""/>
                                </a>
                                <a href={'#'} className={'social'}>
                                    <img src={telegram} alt=""/>
                                </a>
                            </Subtitle>
                        </div>
                    </div>
                    <div className="description__club__bottom__column">
                        <div className="media">
                            <Title title={'Медиа'}/>
                            <div className="video"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ClubId;
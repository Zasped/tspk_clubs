import React, {useState} from 'react';
import './_honorDeskPage.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import Title from "../../components/UI/Title/Title";
import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import ataman from "../../assets/images/ataman.png";
import chel from "../../assets/images/chel.png";

const HonorDeskPage = () => {

    return (
        <MainLayout>
            <div className="department__list">
                <div className="department__list__text">
                    Список руководящих
                </div>
            </div>

            <div className="flex departmentPage_flex">
                <div className="column departmentPage_column">
                    <div className="title">
                        <Title title={'Доска почета'}/>
                    </div>

                    <Outlet/>

                </div>
                <div className="column departmentPage_column">
                    <div className="navigate">
                        <ul className="navigate__list">
                            <Link to={'1'}>
                                <li className="navigate__list__item">
                                    <img src={chel} alt="" className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            Николаев Фёдор
                                        </div>
                                        <div className="text__year">
                                            2019 - 2023
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'2'}>
                                <li className="navigate__list__item">
                                    <img src={chel} alt="" className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            Николаев Фёдор
                                        </div>
                                        <div className="text__year">
                                            2019 - 2023
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'3'}>
                                <li className="navigate__list__item">
                                    <img src={chel} alt="" className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            Николаев Фёдор
                                        </div>
                                        <div className="text__year">
                                            2019 - 2023
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'4'}>
                                <li className="navigate__list__item">
                                    <img src={chel} alt="" className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            Николаев Фёдор
                                        </div>
                                        <div className="text__year">
                                            2019 - 2023
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HonorDeskPage;
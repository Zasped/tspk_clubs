import React, {useState} from 'react';
import './_departmentPage.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import Title from "../../components/UI/Title/Title";
import {Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import ataman from "../../assets/images/ataman.png";
import chel from "../../assets/images/chel.png";

const DepartmentPage = () => {

    const [departmentListVisible, setDepartmentListVisible] = useState(false);

    return (
        <MainLayout>
            <div className="department__list">
                <div className="department__list__text" onClick={e => setDepartmentListVisible(true)}>
                    Список руководящих
                </div>
            </div>

            <div className="flex departmentPage_flex">
                <div className="column departmentPage_column">
                    <div className="title">
                        <Title title={'Руководящий отделением'}/>
                    </div>

                    <Outlet/>

                </div>
                <div className="column departmentPage_column">
                    <div className="navigate">
                        <ul className="navigate__list">
                            <li className="navigate__list__item">
                                <img src={chel} alt="" className={'image'}/>
                                <div className="text">
                                    <div className="text__name">
                                        Николаев Фёдор Макарович
                                    </div>
                                    <div className="text__year">
                                        2019 - 2023
                                    </div>
                                </div>
                            </li>
                            <li className="navigate__list__item">
                                <img src={chel} alt="" className={'image'}/>
                                <div className="text">
                                    <div className="text__name">
                                        Николаев Фёдор Макарович
                                    </div>
                                    <div className="text__year">
                                        2019 - 2023
                                    </div>
                                </div>
                            </li>
                            <li className="navigate__list__item">
                                <img src={chel} alt="" className={'image'}/>
                                <div className="text">
                                    <div className="text__name">
                                        Николаев Фёдор Макарович
                                    </div>
                                    <div className="text__year">
                                        2019 - 2023
                                    </div>
                                </div>
                            </li>
                            <li className="navigate__list__item">
                                <img src={chel} alt="" className={'image'}/>
                                <div className="text">
                                    <div className="text__name">
                                        Николаев Фёдор Макарович
                                    </div>
                                    <div className="text__year">
                                        2019 - 2023
                                    </div>
                                </div>
                            </li>
                            <li className="navigate__list__item">
                                <img src={chel} alt="" className={'image'}/>
                                <div className="text">
                                    <div className="text__name">
                                        Николаев Фёдор Макарович
                                    </div>
                                    <div className="text__year">
                                        2019 - 2023
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ModalLayout visible={departmentListVisible} setVisible={setDepartmentListVisible}>
                <div className="head">
                    <Title title={'Клубы'}/>
                    <div className="close" onClick={e => setDepartmentListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
                <ListNavigate
                    elements={[
                        {body: "Шаров Сергей Александрович"},
                        {body: "Атаманюк Викентий Евгеньевич"},
                        {body: "Ланчиков М.Н."},
                        {body: "Кондурар Наталья Николаевна"},
                        {body: "Кондурар Марина Викторовна"},
                        {body: "Романова Т.Н."},
                    ]}
                    classNames={['navigate']}
                />
            </ModalLayout>
        </MainLayout>
    );
};

export default DepartmentPage;
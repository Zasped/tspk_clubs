import React, {useState} from 'react';
import './_honorDeskPage.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import Title from "../../components/UI/Title/Title";
import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import chel from "../../assets/images/chel.png";

const HonorDeskPage = () => {

    const [honorListVisible, setHonorListVisible] = useState(false)

    return (
        <MainLayout>
            <div className="flex honorDeskPage_flex">
                <div className="column honorDeskPage_column">
                    <div className="title">
                        <Title title={'Доска почета'}/>
                    </div>
                    <div className="honorDesk__list">
                        <div className="honorDesk__list__text" onClick={e => setHonorListVisible(true)}>
                            Список руководящих
                        </div>
                    </div>

                    <Outlet/>

                </div>
                <div className="column honorDeskPage_column">
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

            <ModalLayout visible={honorListVisible} setVisible={setHonorListVisible}>
                <div className="head" style={{justifyContent: "flex-end"}}>
                    <div className="close" onClick={e => setHonorListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
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
            </ModalLayout>
        </MainLayout>
    );
};

export default HonorDeskPage;
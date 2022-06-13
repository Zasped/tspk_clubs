import React, {useState} from 'react';
import './_honorDeskPage.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import Title from "../../components/UI/Title/Title";
import {Link, Outlet, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import chel from "../../assets/images/chel.png";

const HonorDeskPage = () => {

    const [honorListVisible, setHonorListVisible] = useState(false)

    const {id} = useParams();

    const [honor, setHonor] = useState([
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '24.05.2022',
        },
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '25.05.2022',
        },
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '24.05.2022',
        },
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '27.05.2022',
        },
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '28.05.2022',
        },
        {
            name: 'Николаев Фёдор',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ea error ipsum nostrum perferendis quidem repellat rerum vitae.',
            image: chel,
            years: '2019 - 2023',
            date_honor: '29.05.2022',
        }
    ]);

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

                    <Outlet context={honor[id-1]} />

                </div>
                <div className="column honorDeskPage_column">
                    <div className="navigate">
                        <ul className="navigate__list">
                            {honor.map((el, index) =>
                                <Link to={`${index + 1}`} key={index}>
                                    <li className="navigate__list__item">
                                        <img src={chel} className={'image'}/>
                                        <div className="text">
                                            <div className="text__name">
                                                {el.name}
                                            </div>
                                            <div className="text__year">
                                                {el.years}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )}
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
                        {honor.map((el, index) =>
                            <Link to={`${index + 1}`} key={index} onClick={e => setHonorListVisible(false)}>
                                <li className="navigate__list__item">
                                    <img src={chel} className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            {el.name}
                                        </div>
                                        <div className="text__year">
                                            {el.years}
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </ModalLayout>
        </MainLayout>
    );
};

export default HonorDeskPage;
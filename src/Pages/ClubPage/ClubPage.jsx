import React, {useState} from 'react';
import './_clubPage.scss';
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import MainLayout from "../../layout/MainLayout/MainLayout";
import {Link, NavLink, Outlet, useParams} from 'react-router-dom';
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import Title from "../../components/UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faBitcoinSign,
    faCircleDollarToSlot,
    faCoins,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

const ClubPage = () => {

    const [clubsListVisible, setClubsListVisible] = useState(false);

    const {id: idClub} = useParams();
    const [clubs, setClubs] = useState([
        {
            name: 'Blockchain',
            icon: faCircleDollarToSlot,
            description: '1Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '2Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '3Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '4Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '5Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '6Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '7Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '8Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '9Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '10Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '11Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '12Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        },
        {
            name: 'Blockchain',
            icon: faCoins,
            description: '13Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.',
        }
    ]);


    return (
        <MainLayout>
            <div className='flex clubPage_flex'>
                <div className="column clubPage_column">
                    <div className="club__list">
                        <div className="club__list__text" onClick={() => setClubsListVisible(true)}>
                            Список клубов
                        </div>
                    </div>

                    <Outlet context={clubs[idClub - 1]}/>

                </div>
                <div className="column clubPage_column">
                    <Title title={'Клубы'}/>
                    <div className="clubs__select">
                        <div className="current__club">
                            <div className="club__icon">
                                <FontAwesomeIcon icon={clubs[idClub - 1]?.icon} color={'#fff'} className={'icon'}/>
                            </div>
                            <div className="quote">
                                <div className="quote__text">
                                    Туда ехать полчаса, буду через десять минут.
                                </div>
                                <div className="quote__author">
                                    Криминальное чтиво (Pulp Fiction)
                                </div>
                            </div>
                            <div className="nav__arrow">
                                <Link to={`${(+idClub - 1 <= 0) ? clubs.length : +idClub - 1}`}><FontAwesomeIcon
                                    icon={faArrowLeft} className={'arrow'}/></Link>
                                <Link to={`${(+idClub + 1 > clubs.length) ? 1 : +idClub + 1}`}><FontAwesomeIcon
                                    icon={faArrowRight} className={'arrow'}/></Link>
                            </div>
                        </div>
                        <ul className="club__list">
                            {clubs.map((el, index) => {
                                return (index == idClub - 1) ?
                                    null :
                                    <NavLink to={`${index + 1}`} key={index}
                                             className={({isActive}) => (isActive) ? "active" : null}>
                                        <li className={"club__list__item"}>
                                            <div className="club__list__item__image">
                                                <FontAwesomeIcon icon={el.icon} color={'#fff'} className={'icon'}/>
                                            </div>
                                            <div className="club__list__item__name">
                                                {el.name}
                                            </div>
                                        </li>
                                    </NavLink>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <ModalLayout visible={clubsListVisible} setVisible={setClubsListVisible}>
                <div className="head" style={{justifyContent: "flex-end"}}>
                    <div className="close" onClick={e => setClubsListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
                <ul className="club__list">
                    {clubs.map((el, index) =>
                        <NavLink to={`${index + 1}`} key={index} onClick={e => setClubsListVisible(false)}>
                            <li className="club__list__item">
                                <div className="club__list__item__image">
                                    <FontAwesomeIcon icon={el.icon} color={'#fff'} className={'icon'}/>
                                </div>
                                <div className="club__list__item__name">
                                    {el.name}
                                </div>
                            </li>
                        </NavLink>
                    )}
                </ul>
            </ModalLayout>
        </MainLayout>
    );
};

export default ClubPage;

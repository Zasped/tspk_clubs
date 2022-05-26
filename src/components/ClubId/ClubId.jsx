import React from 'react';
import Card from "../UI/Card/Card";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import {useParams} from "react-router-dom";

const ClubId = () => {

    const {id} = useParams();
    return (
        <>
            <div className="page__title">
                <Card
                    title={'Описание'}
                    style={{background: 'var(--mega-red)'}}
                    fontColorDesc={'var(--text-white)'}
                    fontColorTitle={'var(--text-white)'}
                >
                    Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.
                </Card>
            </div>
            <div className={"description_club"}>
                <Card
                    title={'Ведущий клуба'}
                    fontSizeTitle={'18px'}
                    children={'Asurame Socrum'}
                />
                <Card
                    title={'Куратор'}
                    fontSizeTitle={'18px'}
                    children={'Asurame Socrum'}
                />
                <Card
                    title={'Ссылки'}
                    fontSizeTitle={'18px'}
                >
                    <a href={'#'} className={'social'}>
                        <img src={discord} alt=""/>
                        <span>Discord</span>
                    </a>
                    <a href={'#'} className={'social'}>
                        <img src={vk} alt=""/>
                        <span>VK</span>
                    </a>
                    <a href={'#'} className={'social'}>
                        <img src={telegram} alt=""/>
                        <span>Telegram</span>
                    </a>
                </Card>
                <Card
                    title={'Расписание занятий'}
                    fontSizeTitle={'18px'}
                >
                    <p>Занятия проходят в еженедельной форме в определённой аудитории, оффициальный график
                        предоставлен ниже.</p>
                    <p>График не зависит от оффициального графика, место его проведения и время встреч может
                        быть изменено руководящим отделением.</p>
                    <hr style={{border: '1px solid var(--mega-red)'}}/>
                    <div className="days">
                        <div className="day active">пн</div>
                        <div className="day">вт</div>
                        <div className="day">ср</div>
                        <div className="day">чт</div>
                        <div className="day">пт</div>
                        <div className="day">сб</div>
                        <div className="day">вс</div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default ClubId;
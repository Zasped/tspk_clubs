import React from 'react';
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import Card from "../../components/UI/Card/Card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBowlingBall} from "@fortawesome/free-solid-svg-icons";

const Department = () => {
    return (
        <>
            <div className="info__management">
                <h1 className={'info__management__name'}>Атаманюк Викентий Евгеньевич</h1>
                <Subtitle classNames={['info__management__description']}>
                    Преподователь спец. дисциплин по специальности “Информационные системы и программирование” по
                    компетенции “Программные решения для бизнеса”
                </Subtitle>
            </div>
            <div className="links__management">
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
            </div>
            <div className={'icon__management'}>
                <FontAwesomeIcon icon={faBowlingBall} size={'1x'} className={'icon'}/>
            </div>
        </>
    );
};

export default Department;
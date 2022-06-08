import React from 'react';
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import ataman from "../../assets/images/ataman.png";

const HonorDeskId = () => {

    return (
        <div className="info__management">
            <div className="info__management__image">
                <img src={ataman} className={'image'}/>
            </div>
            <div className="info__management__name">
                Asurame Socrum
            </div>
            <div className="info__management__description">
                Разработчики заявили о намечающемся редизайне Валентайн: все изображения креста будут
                заменены на изображения розового сюрикена. Все спрайты в Skullgirls 2nd Encore и Skullgirls
                Mobile должны измениться.
            </div>
            <div className="info__management__links">
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
    );
};

export default HonorDeskId;
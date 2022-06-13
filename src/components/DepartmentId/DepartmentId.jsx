import React from 'react';
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import {useOutletContext} from "react-router-dom";

const Department = () => {

    const data = useOutletContext();

    return (
        <div className="info__management">
            <div className="info__management__image">
                <img src={data.image} className={'image'}/>
            </div>
            <div className="info__management__name">
                {data.name}
            </div>
            <div className="info__management__description">
                {data.description}
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

export default Department;
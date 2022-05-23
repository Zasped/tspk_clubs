import React from 'react';
import Title from "../../UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Input from "../../UI/Input/Input";
import imgQuote from '../../../assets/images/quoteAuth.jpg';
import '../_authentication.scss';
import ModalLayout from "../../../layout/ModalLayout/ModalLayout";

const Auth = () => {
    return (
        <ModalLayout>
            <div className="head">
                <Title title={'Авторизация'}/>
                <div className="close">
                    <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                </div>
            </div>
            <div className="flex">
                <div className="column">
                    <form className={'form'}>
                        <Input type={'text'} placeholder={'login'} value={'asuramesocrum'}/>
                        <Input type={'text'}/>
                    </form>
                </div>
                <div className="column">
                    <div className="quote">
                        <div className="img">
                            <img src={imgQuote} alt="imgQuote"/>
                        </div>
                        <div className="quote__text">
                            <p>“Все, что делаешь, надо делать хорошо, даже если совершаешь безумство.”</p>
                            <small>Оноре де Бальзак</small>
                        </div>
                    </div>
                    <div className="block_submit">
                        <div className="btns">
                            <button className={'btn'}>Регистрация</button>
                            <button className={'btn'}>Авторизация</button>
                        </div>
                        <p>Забыл пароль? (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default Auth;

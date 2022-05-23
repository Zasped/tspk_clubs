import React from 'react';
import Title from "../../UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Input from "../../UI/Input/Input";
import imgQuote from '../../../assets/images/quoteReg.jpg';
import '../_authentication.scss';
import ModalLayout from "../../../layout/ModalLayout/ModalLayout";

const Register = () => {
    return (
        <ModalLayout>
            <div className="head">
                <Title title={'Регистрация'}/>
                <div className="close">
                    <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                </div>
            </div>
            <div className="flex">
                <div className="column">
                    <form className={'form'}>
                        <Input type={'text'} placeholder={'login'} value={'asuramesocrum'}/>
                        <Input type={'text'}/>
                        <Input type={'text'}/>
                        <Input type={'text'} placeholder={'login'} value={'asuramesocrum'}/>
                        <Input type={'text'}/>
                        <Input type={'text'}/>
                        <Input type={'text'}/>
                        <Input type={'text'}/>
                    </form>
                </div>
                <div className="column">
                    <div className="quote">
                        <div className="img">
                            <img src={imgQuote} alt=""/>
                        </div>
                        <div className="quote__text">
                            <p>“Туда ехать полчаса, буду через десять минут.”</p>
                            <small>Криминальное чтиво (Pulp Fiction)</small>
                        </div>
                    </div>
                    <div className="block_submit">
                        <div className="btns">
                            <button className={'btn'}>Авторизация</button>
                            <button className={'btn'}>Регистрация</button>
                        </div>
                        <p>Проблемы с регистрацией? ( ͡ಠ ʖ̯ ͡ಠ)</p>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default Register;

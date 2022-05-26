import React from 'react';
import Title from "../../UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Input from "../../UI/Input/Input";
import imgQuote from '../../../assets/images/quoteReg.jpg';
import '../_authentication.scss';
import ModalLayout from "../../../layout/ModalLayout/ModalLayout";
import Button from "../../UI/Button/Button";

const Register = ({registerVisible, setRegisterVisible, setAuthVisible}) => {
    return (
        <ModalLayout setVisible={setRegisterVisible} visible={registerVisible}>
            <div className="head">
                <Title title={'Регистрация'}/>
                <div className="close" onClick={e => setRegisterVisible(false)}>
                    <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                </div>
            </div>
            <div className="flex">
                <div className="column">
                    <form className={'form'}>
                        <Input type={'text'} placeholder={'Логин'} value={''}/>
                        <Input type={'text'} placeholder={'Почта'} value={''}/>
                        <Input type={'text'} placeholder={'Имя'} value={''}/>
                        <Input type={'text'} placeholder={'Фамилия'} value={''}/>
                        <Input type={'text'} placeholder={'Отчество'} value={''}/>
                        <Input type={'text'} placeholder={'Группа'} value={''}/>
                        <Input type={'text'} placeholder={'Пароль'} value={''}/>
                        <Input type={'text'} placeholder={'Повтор пароля'} value={''}/>
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
                            <Button title={'Авторизация'} classes={'white'} onClick={e => {
                                setRegisterVisible(false)
                                setAuthVisible(true)
                            }}/>
                            <Button title={'Регистрация'} classes={'auth'}/>
                        </div>
                        <p>Проблемы с регистрацией? ( ͡ಠ ʖ̯ ͡ಠ)</p>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default Register;

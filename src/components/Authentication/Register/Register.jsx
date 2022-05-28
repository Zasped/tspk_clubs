import React, {useContext, useState} from 'react';
import Title from "../../UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Input from "../../UI/Input/Input";
import imgQuote from '../../../assets/images/quoteReg.jpg';
import '../_authentication.scss';
import ModalLayout from "../../../layout/ModalLayout/ModalLayout";
import Button from "../../UI/Button/Button";
import {Context} from "../../../index";

const Register = ({registerVisible, setRegisterVisible, setAuthVisible}) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [surName, setSurName] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const {store} = useContext(Context);

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

                        <Input type={'email'} placeholder={'Почта'} value={email}
                               onChange={e => setEmail(e.target.value)}/>

                        <Input type={'text'} placeholder={'Имя'} value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>

                        <Input type={'text'} placeholder={'Фамилия'} value={lastName}
                               onChange={e => setLastName(e.target.value)}/>

                        <Input type={'text'} placeholder={'Отчество'} value={surName}
                               onChange={e => setSurName(e.target.value)}/>

                        <Input type={'text'} placeholder={'Группа'} value={group}
                               onChange={e => setGroup(e.target.value)}/>

                        <Input type={'password'} placeholder={'Пароль'} value={password}
                               onChange={e => setPassword(e.target.value)}/>

                        <Input type={'password'} placeholder={'Повтор пароля'} value={passwordConfirm}
                               onChange={e => setPasswordConfirm(e.target.value)}/>

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
                            <Button title={'Авторизация'} classes={'white'} onClick={() => {
                                setRegisterVisible(false)
                                setAuthVisible(true)
                            }}/>
                            <Button title={'Регистрация'} classes={'auth'}
                                    onClick={() => store.register(email, firstName, lastName, surName, password)}/>
                        </div>
                        <p>Проблемы с регистрацией? ( ͡ಠ ʖ̯ ͡ಠ)</p>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default Register;

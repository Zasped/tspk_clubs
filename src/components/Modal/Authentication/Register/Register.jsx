import React, {useContext, useRef, useState} from 'react';
import Title from "../../../UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Input from "../../../UI/Input/Input";
import imgQuote from '../../../../assets/images/quoteReg.jpg';
import '../_authentication.scss';
import ModalLayout from "../../../../layout/ModalLayout/ModalLayout";
import Button from "../../../UI/Button/Button";
import {Context} from "../../../../index";
import Select from "react-select";

const Register = ({registerVisible, setRegisterVisible, setAuthVisible}) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [surName, setSurName] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const {store} = useContext(Context);

    const [selectOptions, setSelectOptions] = useState([
        {value: 'Д-11', label: 'Д-11'},
        {value: 'Д-12', label: 'Д-12'},
        {value: 'СД-11', label: 'СД-11'},
        {value: 'НК-21', label: 'НК-21'},
        {value: 'НК-11', label: 'НК-11'},
        {value: 'НК-12', label: 'НК-12'},
        {value: 'КС-11', label: 'КС-11'},
        {value: 'ИСиП-11', label: 'ИСиП-11'},
        {value: 'ИСиП-12', label: 'ИСиП-12'},
        {value: 'ИСиП-21', label: 'ИСиП-21'},
        {value: 'ИСиП-22', label: 'ИСиП-22'},
        {value: 'ИСиП-23', label: 'ИСиП-23'},
        {value: 'ИС-21', label: 'ИС-21'},
        {value: 'НК-21', label: 'НК-21'},
        {value: 'НК-22', label: 'НК-22'},
        {value: 'К-21', label: 'К-21'},
        {value: 'Д-22', label: 'Д-22'},
        {value: 'СД-21', label: 'СД-21'},
        {value: 'ОДС-31', label: 'ОДС-31'},
        {value: 'Д-31', label: 'Д-31'},
        {value: 'Д-32', label: 'Д-32'},
        {value: 'СД-31', label: 'СД-31'},
        {value: 'ИСиП-31', label: 'ИСиП-31'},
        {value: 'ИСиП-32', label: 'ИСиП-32'},
        {value: 'НК-31', label: 'НК-31'},
        {value: 'НК-32', label: 'НК-32'},
        {value: 'Д-41', label: 'Д-41'},
        {value: 'СД-41', label: 'СД-41'},
        {value: 'ИСиП-41', label: 'ИСиП-41'},
        {value: 'ИСиП-42', label: 'ИСиП-42'},
        {value: 'НК-41', label: 'НК-41'},
        {value: 'НК-42 ', label: 'НК-42'},
    ]);

    const getGroup = () => group ? selectOptions.find(g => g.value === group) : '';

    const select = useRef();
    console.log(select.current)
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

                        <Select
                            value={getGroup()}
                            onChange={(newValue) => setGroup(newValue.value)}
                            options={selectOptions}
                            placeholder={'Группа'}
                            classNamePrefix={'select'}
                            maxMenuHeight={150}
                            blurInputOnSelect
                            ref={select}
                        />

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
                            <p>Туда ехать полчаса, буду через десять минут.</p>
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

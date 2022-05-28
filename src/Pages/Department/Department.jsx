import React, {useState} from 'react';
import './_department.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import Title from "../../components/UI/Title/Title";
import {Outlet} from "react-router-dom";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Card from "../../components/UI/Card/Card";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";

const Department = () => {

    const [departmentListVisible, setDepartmentListVisible] = useState(false);

    return (
        <MainLayout>
            <div className="department__list">
                <div className="department__list__text" onClick={e => setDepartmentListVisible(true)}>
                    Список руководящих
                </div>
            </div>
            <div className="department_flex">
                <div className="department_column navList">
                    <ListNavigate
                        elements={[
                            {body: "Шаров Сергей Александрович"},
                            {body: "Атаманюк Викентий Евгеньевич"},
                            {body: "Ланчиков М.Н."},
                            {body: "Кондурар Наталья Николаевна"},
                            {body: "Кондурар Марина Викторовна"},
                            {body: "Романова Т.Н."},
                        ]}
                        classNames={['navigate']}
                    />
                </div>
                <div className="department_column">
                    <Title title={'Руководящий отделением'}/>

                    <Outlet/>

                </div>
            </div>
            <ModalLayout visible={departmentListVisible} setVisible={setDepartmentListVisible}>
                <div className="head">
                    <Title title={'Клубы'}/>
                    <div className="close" onClick={e => setDepartmentListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
                <ListNavigate
                    elements={[
                        {body: "Шаров Сергей Александрович"},
                        {body: "Атаманюк Викентий Евгеньевич"},
                        {body: "Ланчиков М.Н."},
                        {body: "Кондурар Наталья Николаевна"},
                        {body: "Кондурар Марина Викторовна"},
                        {body: "Романова Т.Н."},
                    ]}
                    classNames={['navigate']}
                />
            </ModalLayout>
        </MainLayout>
    );
};

export default Department;
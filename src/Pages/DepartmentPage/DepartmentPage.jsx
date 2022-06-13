import React, {useState} from 'react';
import './_departmentPage.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import Title from "../../components/UI/Title/Title";
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import chel from "../../assets/images/chel.png";
import ataman from "../../assets/images/ataman.png";
import kondurarM from "../../assets/images/kondurarM.jpg";
import kondurarN from "../../assets/images/kondurarN.jpg";
import sharov from "../../assets/images/sharov.jpg";
import lanchikov from "../../assets/images/lanchikov.jpg";
import romanova from "../../assets/images/romanova.jpg";


const DepartmentPage = () => {

    const [departmentListVisible, setDepartmentListVisible] = useState(false);

    const {id} = useParams();

    const [department, setDepartment] = useState([
        {
            name: 'Шаров Сергей Александрович',
            description: 'Преподаватель спец. дисциплин на специальности «информационные системы и программирование». Сертифицированный эксперт wsr по компетенции "веб-дизайн и разработка"',
            image: sharov
        },
        {
            name: 'Атаманюк Викентий Евгеньевич',
            description: 'Преподаватель спец. дисциплин на специальности «информационные системы и программирование». Эксперт wsr по компетенции «Программные решения для бизнеса»',
            image: ataman
        },
        {
            name: 'Ланчиков Максим Николаевич',
            description: 'Зам.директора по IT. Преподаватель спец. дисциплин на специальности «информационные системы и комплексы».',
            image: lanchikov
        },
        {
            name: 'Кондурар Наталья Николаевна',
            description: 'Преподаватель спец. дисциплин на отделении IT. Эксперт wsr по компетенции «Разработка решений с использованием блокчейн-технологий».',
            image: kondurarN
        },
        {
            name: 'Кондурар Марина Викторовна',
            description: 'Преподаватель спецдисциплин на отделении IT. эксперт wsr по компетенции «машинное обучение и большие данные». Кандидат педагогических наук',
            image: kondurarM
        },
        {
            name: 'Романова Татьяна Николаевна',
            description: 'Преподаватель спец. дисциплин на отделении IT. Эксперт wsr по компетенции «Разработка виртуальной и дополненной реальности».',
            image: romanova
        }
    ]);

    return (
        <MainLayout>
            <div className="flex departmentPage_flex">
                <div className="column departmentPage_column">
                    <div className="title">
                        <Title title={'Руководящие отделением'}/>
                    </div>
                    <div className="department__list">
                        <div className="department__list__text" onClick={e => setDepartmentListVisible(true)}>
                            Список руководящих
                        </div>
                    </div>
                    <Outlet context={department[id-1]} />
                </div>
                <div className="column departmentPage_column">
                    <div className="navigate">
                        <ul className="navigate__list">
                            {department.map((el, index)=>
                                <NavLink to={`${index+1}`} key={index}>
                                    <li className="navigate__list__item">
                                        <img src={el.image} className={'image'}/>
                                        <div className="text">
                                            <div className="text__name">
                                                {el.name}
                                            </div>
                                        </div>
                                    </li>
                                </NavLink>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <ModalLayout visible={departmentListVisible} setVisible={setDepartmentListVisible}>
                <div className="head" style={{justifyContent: "flex-end"}}>
                    <div className="close" onClick={e => setDepartmentListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
                <div className="navigate">
                    <ul className="navigate__list">
                        {department.map((el, index)=>
                            <NavLink to={`${index+1}`} key={index} onClick={e => setDepartmentListVisible(false)}>
                                <li className="navigate__list__item">
                                    <img src={el.image} className={'image'}/>
                                    <div className="text">
                                        <div className="text__name">
                                            {el.name}
                                        </div>
                                    </div>
                                </li>
                            </NavLink>
                        )}
                    </ul>
                </div>
            </ModalLayout>
        </MainLayout>
    );
};

export default DepartmentPage;
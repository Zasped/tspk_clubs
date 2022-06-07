import React, {useState} from 'react';
import './_clubPage.scss';
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import MainLayout from "../../layout/MainLayout/MainLayout";
import {Outlet} from 'react-router-dom';
import ModalLayout from "../../layout/ModalLayout/ModalLayout";
import Title from "../../components/UI/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const ClubPage = () => {

    const [clubsListVisible, setClubsListVisible] = useState(false);

    return (
        <MainLayout>
            <div className='flex clubPage_flex'>
                <div className="column clubPage_column">
                    <div className="club__list">
                        <div className="club__list__text" onClick={() => setClubsListVisible(true)}>
                            Список клубов
                        </div>
                    </div>

                    <Outlet/>

                </div>
                <div className="column clubPage_column">

                </div>
            </div>
            <ModalLayout visible={clubsListVisible} setVisible={setClubsListVisible}>
                <div className="head">
                    <Title title={'Клубы'}/>
                    <div className="close" onClick={e => setClubsListVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} size={'2x'} color={'#5E5A60'}/>
                    </div>
                </div>
                <ListNavigate
                    elements={[
                        {body: 'Клуб 1'},
                        {body: 'Клуб 2'},
                        {body: 'Клуб 3'},
                        {body: 'Клуб 4'},
                        {body: 'Клуб 5'},
                        {body: 'Клуб 6'},
                        {body: 'Клуб 7'},
                        {body: 'Клуб 8'},
                        {body: 'Клуб 9'},
                    ]}
                />
            </ModalLayout>
        </MainLayout>
    );
};

export default ClubPage;

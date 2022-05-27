import React from 'react';
import './_clubPage.scss';
import clubImg from "../../assets/images/clubImg.png";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import MainLayout from "../../layout/MainLayout/MainLayout";
import {Outlet, useParams} from 'react-router-dom';
import styled from 'styled-components';

const ClubPage = () => {

    const params = useParams();

    const DIV = styled.div`
      &::before {
        content: '${params.id}';
      }
    `
    return (
        <MainLayout>
            <DIV className='flex clubPage_flex'>
                <div className="column clubPage_column">
                    <div className="club__list">
                        <div className="club__list__text">
                            Список клубов
                        </div>
                    </div>

                    <Outlet/>

                </div>

                <div className="column clubPage_column">
                    <div className="left_col">
                        <div className="flex">
                            <div className="clubImg">
                                <img src={clubImg} alt="clubImg"/>
                            </div>
                            <div className="navList">
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
                            </div>
                        </div>
                    </div>
                </div>
            </DIV>
        </MainLayout>
    );
};

export default ClubPage;

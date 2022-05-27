import React from 'react';
import './_department.scss';
import MainLayout from "../../layout/MainLayout/MainLayout";
import ListNavigate from "../../components/ListNavigate/ListNavigate";
import Title from "../../components/UI/Title/Title";
import {Outlet} from "react-router-dom";

const Department = () => {
    return (
        <MainLayout>
            <div className="department_flex">
                <div className="department_column">
                    <div className="department_flex">
                        <div className="department_column sidebar">
                            <ListNavigate
                                elements={[
                                    {body: "123"},
                                    {body: "123"},
                                    {body: "123"},
                                    {body: "123"},
                                    {body: "123"},
                                    {body: "123"}
                                ]}
                                classNames={['navigate']}
                            />
                        </div>
                        <div className="department_column">
                            <Title title={'Руководящий отделением'}/>
                            <div className="department__info">

                                <Outlet/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="department_column">

                </div>
            </div>
        </MainLayout>
    );
};

export default Department;
import React from 'react';
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import {useOutletContext} from "react-router-dom";

const HonorDeskId = () => {

    const data = useOutletContext();


    return (
        <div className="info__management">
            <div className="info__management__image">
                <img src={data.image} className={'image'}/>
            </div>
            <div className="info__management__name">
                {data.name}
            </div>
            <div className="info__management__description">
                {data.description}
            </div>
            <div className="info__management__links">
                <Subtitle classNames={['date__list']}>
                    <div className="study__year">
                        <h3 className="study__year__title">
                            Года обучения
                        </h3>
                        <p>
                            {data.years}
                        </p>
                    </div>
                    <div className="honor__date">
                        <h3 className="honor__date__title">
                            Дата почёта
                        </h3>
                        <p>
                            {data.date_honor}
                        </p>
                    </div>
                </Subtitle>
            </div>
        </div>
    );
};

export default HonorDeskId;
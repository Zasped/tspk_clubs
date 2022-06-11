import React from 'react';
import Title from "../UI/Title/Title";
import './_rowList.scss';

const RowList = ({title, data}) => {

    return (
        <div>
            <Title title={title}/>
            <div className="row__list">
                <div className="row__list__column">
                    {data.map(el =>
                        <p className={'fieldName'}>{el.name}</p>
                    )}
                </div>
                <div className="row__list__column">
                    {data.map(el =>
                        <p className={'fieldText'}>{el.body}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RowList;
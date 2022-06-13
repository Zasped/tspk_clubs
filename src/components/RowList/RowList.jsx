import React from 'react';
import Title from "../UI/Title/Title";
import './_rowList.scss';

const RowList = ({title, data}) => {

    return (
        <div>
            <Title title={title}/>
            <table className="row__list">
                <tbody>
                {data.map((el, index) =>
                    <tr className={'row__item'} key={index}>
                        <td className={'fieldName'}>{el.name}</td>
                        <td className={'slash'}>/</td>
                        <td className={'fieldText'}>{el.body}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default RowList;
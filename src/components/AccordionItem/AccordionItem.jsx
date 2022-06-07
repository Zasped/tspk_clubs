import React, {useState} from 'react';
import './_accordionItem.scss';
import {faAngleDown, faAngleUp, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AccordionItem = ({data, active, onClick}) => {

    return (
        <div className="accordion__item">
            <div className="accordion__item__title" onClick={onClick}>
                <div className="title">
                    <FontAwesomeIcon icon={data.icon} size={"2x"} className={'icon'} color={'#fff'}/>
                    <span>{data.title}</span>
                </div>
                <div className="angle">
                    <FontAwesomeIcon icon={(active) ? faAngleUp : faAngleDown} size={"2x"} className={'icon'} color={'#fff'}/>
                </div>
            </div>
            <div className={"accordion__item__body"}>
                <span className={active}>{data.body}</span>
            </div>
        </div>
    );
};

export default AccordionItem;
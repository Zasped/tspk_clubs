import React from 'react';
import './_accordionItem.scss';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
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
                    <FontAwesomeIcon icon={faAngleDown} size={"2x"} className={(active) ? 'icon' : 'icon active'} color={'#fff'}/>
                </div>
            </div>
            <div className={!(active) ? "accordion__item__body" : 'accordion__item__body active'}>
                <span className={active}>{data.body}</span>
            </div>
        </div>
    );
};

export default AccordionItem;
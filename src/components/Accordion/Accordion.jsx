import React, {useState} from 'react';
import './_accordion.scss';
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({data}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={'accordion'}>
            {data.map((el, index) => {
                const active = (activeIndex === index) ? 'active' : null ;
                return(
                    <AccordionItem
                        data={el}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        active={active}
                        icon={el.icon}
                    />
                )
            })}
        </div>
    );
};

export default Accordion;
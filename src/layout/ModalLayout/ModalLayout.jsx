import React from 'react';
import './_modalLayout.scss';
import {CSSTransition} from "react-transition-group";

const ModalLayout = ({children, setVisible, visible}) => {

    return (
        <CSSTransition in={visible} classNames='modal_anim' timeout={200} mountOnEnter unmountOnExit>
            <div className={(visible) ? 'modal active' : 'modal'} onClick={() => setVisible(visible => !visible)}>
                <div className={'modal__content'} onClick={e => e.stopPropagation()}>
                    {children}
                    <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                        <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"/>
                    </svg>
                </div>
            </div>
        </CSSTransition>
    );
};

export default ModalLayout;

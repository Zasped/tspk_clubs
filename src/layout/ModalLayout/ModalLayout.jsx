import React from 'react';
import './_modalLayout.scss';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const ModalLayout = ({children, setVisible, visible}) => {

    return (
        <CSSTransition in={visible} classNames='modal_anim' timeout={300}>
            <div className={(visible) ? 'modal active' : 'modal'} onClick={() => setVisible(visible => !visible)}>
                <div className={'modal__content'} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default ModalLayout;

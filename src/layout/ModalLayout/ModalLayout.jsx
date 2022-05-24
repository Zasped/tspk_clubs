import React from 'react';
import './_modalLayout.scss';

const ModalLayout = ({children}) => {

    return (
        <div className={'modal'}>
            <div className={'modal__content'}>
                {children}
            </div>
        </div>
    );
};

export default ModalLayout;

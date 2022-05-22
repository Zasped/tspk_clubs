import React from 'react';
import './_mainLayout.scss';

const MainLayout = ({children}) => {
    return (
        <main className={'main'}>
            <div className="container">
                {children}
            </div>
        </main>
    );
};

export default MainLayout;

import React from 'react';
import './_mainLayout.scss';

const MainLayout = ({children}) => {
    return (
        <main className={'main'}>
            <div className="container">
                <div className="smile left"><span>(￣y▽￣)╭ Ohohoho.....</span></div>
                {children}
                <div className="smile right"><span>┌( ಠ_ಠ)┘</span></div>
            </div>
        </main>
    );
};

export default MainLayout;

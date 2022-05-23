import React from 'react';
import './_header.scss';
import menuImg from '../../assets/images/menu.png'

const Header = ({setMenuVisible}) => {
    return (
        <header className={'header'}>
            <div className="container">
                <div className={'content'}>
                    <h1 className={'header__menu'} onClick={e => setMenuVisible(true)}><img src={menuImg} alt=""/>menu</h1>
                    <ul className={'header__nav'}>
                        <li className="header__nav__item">АВТОРИЗАЦИЯ</li>
                        <li className="header__nav__item">О ПРОЕКТЕ</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

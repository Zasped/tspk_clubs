import React, {useContext} from 'react';
import './_header.scss';
import menuImg from '../../assets/images/menu.png'
import {Context} from "../../index";

const Header = ({setMenuVisible, setAuthVisible}) => {

    const {store} = useContext(Context);

    return (
        <header className={'header'}>
            <div className="container">
                <div className={'content'}>
                    <h1 className={'header__menu'} onClick={e => setMenuVisible(true)}><img src={menuImg} alt=""/>menu</h1>
                    <ul className={'header__nav'}>
                        {(store.isAuth) ?
                            <li className="header__nav__item" onClick={() => store.logout()}>{store.user.first_name}</li>
                            : <li className="header__nav__item" onClick={e => setAuthVisible(true)}>АВТОРИЗАЦИЯ</li>
                        }

                        <li className="header__nav__item">О ПРОЕКТЕ</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

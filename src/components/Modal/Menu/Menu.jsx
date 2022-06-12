import React from 'react';
import './_menu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBaby,
    faBug,
    faCalendarDays,
    faCubesStacked, faHighlighter, faPersonThroughWindow,
    faUniversalAccess,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import MenuLinks from "../../MenuLinks/MenuLinks";
import {CSSTransition} from "react-transition-group";

const Menu = ({visible, setMenuVisible}) => {

    const closeModal = () => {
        setMenuVisible(false)
    }

    return (
        <CSSTransition in={visible} classNames='modal_anim' timeout={300} mountOnEnter unmountOnExit>
            <div className={(visible) ? 'menu active' : 'menu'}>
                <div className={'menu__content'}>
                    <div className="head">
                        <h1 className={'title'}>
                            MENU
                        </h1>
                        <div className="close" onClick={closeModal}>
                            <FontAwesomeIcon icon={faXmark} size={'2x'} color={'var(--background)'}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="items">
                            <Link to={'clubs'} onClick={closeModal}>
                                <MenuLinks icon={faCubesStacked} text={'Клубы'}/>
                            </Link>
                            <Link to={'home'} onClick={closeModal}>
                                <MenuLinks icon={faHighlighter} text={'Ярмарка мастеров'}/>
                            </Link>
                            <Link to={'timetable'} onClick={closeModal}>
                                <MenuLinks icon={faCalendarDays} text={'Расписание'}/>
                            </Link>
                            <Link to={'department'} onClick={closeModal}>
                                <MenuLinks icon={faBaby} text={'Руководящие отделением'}/>
                            </Link>
                            <Link to={'honordesk'} onClick={closeModal}>
                                <MenuLinks icon={faPersonThroughWindow} text={'Доска почета'}/>
                            </Link>
                            <Link to={'home'} onClick={closeModal}>
                                <MenuLinks icon={faBug} text={'В разработке'}/>
                            </Link>
                            <Link to={'home'} onClick={closeModal}>
                                <MenuLinks icon={faBug} text={'В разработке'}/>
                            </Link>
                            <Link to={'home'} onClick={closeModal}>
                                <MenuLinks icon={faBug} text={'В разработке'}/>
                            </Link>
                            <Link to={'home'} onClick={closeModal}>
                                <MenuLinks icon={faUniversalAccess} text={'О проекте'}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Menu;

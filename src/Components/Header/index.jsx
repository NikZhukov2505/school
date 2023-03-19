import React, { useContext } from 'react';
import s from './Header.module.css'
import logo from '../../assets/logo.png'
import Menu from './Menu';
import { SchoolContext } from '../../schoolContext';
import 'animate.css';
import ContactsButton from './ContactsButton';
import BurgerMenu from './BurgerMenu';

const Header = () => {
    const schoolInfo = useContext(SchoolContext)
    return (
        <header>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={`http://195.38.164.30:8001${schoolInfo?.logo}`} alt="logo" />
                </div>
                <Menu />
                <BurgerMenu />
                <ContactsButton info={schoolInfo} />
            </div>
        </header>

    );
};

export default Header;
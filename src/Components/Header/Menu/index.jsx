import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import s from '../Header.module.css'

const Menu = () => {
    return (
        <nav className={s.nav_menu}>
            <ul className={s.menu}>
                <li><Link
                    className={s.menu_items}
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Информация</Link></li>
                <li><Link
                    className={s.menu_items}
                    to="command"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Педагоги</Link></li>
                <li><Link
                    className={s.menu_items}
                    to="clubs"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Кружки и секции</Link></li>
                <li><Link
                    className={s.menu_items}
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Галерея</Link></li>
                <li><Link
                    className={s.menu_items}
                    to="comments"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Отзывы</Link></li>
                <li><Link
                    className={s.menu_items}
                    to="news"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    activeClass={'active'}
                >Новости</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
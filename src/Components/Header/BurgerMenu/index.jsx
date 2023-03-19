import React, { useContext, useState } from 'react';
import styles from './BurgerMenu.module.css'
import { Link } from 'react-scroll';
import { SchoolContext } from './../../../schoolContext';

const BurgerMenu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    const { whatsapp } = useContext(SchoolContext)

    return (
        <div className={styles.burgerMenu}>
            <div onClick={() => setBurgerActive(!burgerActive)} className={burgerActive ? styles.menu_btn_active : styles.menu_btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={burgerActive ? styles.menu_active : styles.menu}>
                <nav className={styles.navigation}>
                    <ul>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="about-us"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Информация</Link></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="command"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Педагоги</Link></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="clubs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Кружки и секции</Link></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Галерея</Link></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="comments"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Отзывы</Link></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            className={styles.links}
                            to="news"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            activeClass={'active'}
                        >Новости</Link></li>
                    </ul>
                </nav>
                <div className={styles.connect_block}>
                    <a href={whatsapp}>
                        <button className={styles.connect_btn}>Связаться с нами</button>
                    </a>
                </div>
            </div >
        </div >
    );
};

export default BurgerMenu;
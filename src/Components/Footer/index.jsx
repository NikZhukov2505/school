import React, { useContext, useState } from 'react';
import s from './Footer.module.css'
import phone from '../../assets/phone.png'
import mailImg from '../../assets/mail.png'
import { Link } from 'react-scroll';
import insta from '../../assets/instagram.png'
import whatsappImg from '../../assets/whatsapp.png'
import { SchoolContext } from './../../schoolContext';
import DocModal from './DocModal';


const Footer = () => {
    const {
        number_1,
        number_2,
        number_3,
        twitter,
        whatsapp,
        mail,
        address,
    } = useContext(SchoolContext)
    const [isVisible, setIsvisible] = useState(false)
    const showModal = () => setIsvisible(true)
    const hideModal = (e) => {
        if (e.target.classList[0] === 'close_btn') {
            setIsvisible(false)
        }
    }
    return (
        <footer className={s.footer_all}>
            <div className={s.container}>
                <div className={s.all_box}>
                    <div className={s.contact}>
                        <h2>Наши контакты:</h2>
                        <div className={s.box_contact}>
                            <div className={s.phone_contact}>
                                <img src={phone} alt="Телефон" />
                            </div>
                            <div className={s.number_contact}>
                                <p><a className={s.number} href={`tel:${number_1}`}>{number_1}</a></p>
                                <p><a className={s.number} href={`tel:${number_2}`}>{number_2}</a></p>
                                <p><a className={s.number} href={`tel:${number_3}`}>{number_3}</a></p>
                            </div>
                        </div>
                        <div className={s.mail_card}>
                            <img src={mailImg} alt="Майл" />
                            <div className={s.mail_contact}>
                                <a href={`mailto:${mail}`}>{mail}</a>
                            </div>
                        </div>
                        <button onClick={showModal} className={s.documents}>Документация</button>
                        {isVisible && <DocModal hide={hideModal} />}
                    </div>
                    <div className={s.map_block}>

                        <iframe
                            className={s.gmap_iframe}
                            title='Карта расположения'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1463.0774658951232!2d74.6007952!3d42.827341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6041709c043%3A0x524cc071bd939329!2zNTQg0YPQuy4g0JDQsdC00YvQu9Cw0YHQsCDQnNCw0LvQtNGL0LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1678710887047!5m2!1sru!2skg"
                            width="100%"
                            scrolling="yes"
                        ></iframe>
                        <h3 className={s.address}>{address}</h3>
                    </div>
                    <div className={s.footer_nav}>
                        <nav>
                            <ul className={s.menu}>
                                <li><Link
                                    className={s.menu_item}
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Информация</Link></li>
                                <li><Link
                                    className={s.menu_item}
                                    to="command"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Педагоги</Link></li>
                                <li><Link
                                    className={s.menu_item}
                                    to="clubs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Кружки</Link></li>
                                <li><Link
                                    className={s.menu_item}
                                    to="gallery"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Галерея</Link></li>
                                <li><Link
                                    className={s.menu_item}
                                    to="comments"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Отзывы</Link></li>
                                <li><Link
                                    className={s.menu_item}
                                    to="news"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                >Новости</Link></li>
                            </ul>
                        </nav>
                        <div className={s.icons}>
                            <a href={twitter}>
                                <img src={insta} alt="Лого инстаграмма" />
                            </a>
                            <a href={whatsapp}>
                                <img src={whatsappImg} alt="Лого вотсапа" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className={s.itc_ref_block}>
                Разработано:
                <a target={'_blank'} rel="noreferrer noopener" href="http://itcdevs.com">ITC Devs</a>
                <span>&reg;</span>
            </div>
        </footer>
    );
};

export default Footer;
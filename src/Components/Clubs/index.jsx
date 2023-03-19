import React, { useContext } from 'react';
import s from './Clubs.module.css'
import clubsimg from '../../assets/clubImg.png'
import { SchoolContext } from '../../schoolContext';

const Clubs = () => {
    const { whatsapp } = useContext(SchoolContext)
    return (
        <section id='clubs'>
            <div className={s.box_general}>
                <div className={s.container}>
                    <div className={s.clubs_all}>
                        <div className={s.img_bg}>
                            <img src={clubsimg} alt="картинка-кружков" />
                        </div>
                        <div className={s.clubs_box}>
                            <h3>Учи все что захочешь</h3>
                            <h2>Любые кружки вашему ребенку</h2>
                            <p>У нас есть все виды кружков. Ваш ребенок найдет чем увлечься вместе с учителями и его друзьями.</p>
                            <button><a href={whatsapp}>Записать ребенка</a></button>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default Clubs;
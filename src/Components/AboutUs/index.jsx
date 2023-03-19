import React, { useContext, useState } from 'react';
import s from './AboutUs.module.css'
import { SchoolContext } from './../../schoolContext';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img4.png'
import img3 from '../../assets/img2.png'
import img4 from '../../assets/img3.png'
import img5 from '../../assets/Icons1.png'
import img6 from '../../assets/Icons2.png'
import img7 from '../../assets/Icons3.png'



const AboutUs = () => {
    const {
        description_2,
        admissiontouniversity,
        staff,
        students,
        successworkyear,
    } = useContext(SchoolContext)
    const [isVisible, setIsVisible] = useState(false)
    const toogleVisible = () => setIsVisible(!isVisible)
    return (
        <section className={s.about_us} id='about-us'>
            <div className={s.container}>
                <h1 className={s.text}>В чем наша уникальность?</h1>
                <div className={s.box_all}>
                    <div className={s.all}>
                        <img height={70} src={img1} alt="img_info" />
                        <div className={s.box}>
                            <h3>{admissiontouniversity}</h3>
                            <p>Поступление в университет</p>
                        </div>
                    </div>
                    <div className={s.all}>
                        <img height={70} src={img2} alt="img_info" />
                        <div className={s.box}>
                            <h3>{staff}</h3>
                            <p>Учителей</p>
                        </div>
                    </div><div className={s.all}>
                        <img height={70} src={img3} alt="img_info" />
                        <div className={s.box}>
                            <h3>{students}</h3>
                            <p>Учащихся</p>
                        </div>
                    </div><div className={s.all}>
                        <img height={70} src={img4} alt="img_info" />
                        <div className={s.box}>
                            <h3>{successworkyear}</h3>
                            <p>Опыта работы</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={s.all_two}>
                <div className={s.container}>
                    <div className={s.card_all}>
                        <div className={s.box_card}>
                            <div className={s.card}>
                                <div className={s.card_one}>
                                    <img src={img5} alt="img_ifo" />
                                    <h2>Небольшие классы</h2>
                                    <p>В классе от 10-15 человек, что позволяет лучше усваивать материал, а также дает возможность учителю уделить свое внимание каждому ученику.</p>
                                </div>
                                <div className={s.card_one}>
                                    <img src={img6} alt="img_ifo" />
                                    <h2>Успешные люди</h2>
                                    <p>Мы следим за достижениями каждого ученика нашей школы и помогаем им в достижениях своих целей. </p>
                                </div>
                            </div>
                            <div className={s.card_right}>
                                <div className={s.card_one}>
                                    <img src={img7} alt="img_ifo" />
                                    <h2>Увлечения</h2>
                                    <p>Многообразие выбора кружков: ученик может научиться чему-то новому или улучшить уже существующие навыки. </p>
                                </div>
                            </div>
                        </div>
                        <div className={s.shool}>
                            <h2>Школа Ак-Тилек</h2>
                            <p>{isVisible ? description_2 : description_2?.slice(0, 250) + '...'}</p>
                            <button onClick={toogleVisible}>Подробнее о нас </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
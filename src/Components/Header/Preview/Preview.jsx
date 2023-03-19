import React, { useContext } from 'react';
import s from './Preview.module.css'
import { SchoolContext } from '../../../schoolContext';



const Preview = () => {
    const {
        description,
        whatsapp,
        facebook,
    } = useContext(SchoolContext)
    return (
        <div className={s.child}>
            <div className={s.bg_box}>
                <div className={s.container}>
                    <div className={s.box_card}>
                        <div className={s.card_home}>
                            <h1>Частная школа Ак-Тилек</h1>
                            <p>{description}</p>
                        </div>
                        <div className={s.links}>
                            <a href={whatsapp}>Связаться</a>
                            <a href={facebook}>Электронный журнал</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Preview;
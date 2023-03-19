import React from 'react';
import s from './NewsModal.module.css'
import close from '../../../assets/close.png'

const NewsModal = ({ news, hide }) => {
    return (
        <div onClick={hide} className={`close_btn ${s.modal_wrapper} animate__animated animate__zoomIn animate__faster`}>
            <div className={s.modal_container}>
                <img onClick={hide} className={`close_btn ${s.close}`} src={close} alt="Close" />
                <h1 className={s.title}>{news?.name}</h1>
                <div className={s.news_image_block}>
                    <img src={`http://195.38.164.30:8001${news?.photo}`} alt={news?.name} />
                </div>
                <p className={s.news_description}>{news?.description}</p>
            </div>
        </div>
    );
};

export default NewsModal;
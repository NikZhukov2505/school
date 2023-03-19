import React, { useState } from 'react';
import s from './NewsCard.module.css'
import NewsModal from './../NewsModal/index';

const NewsCard = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentNews, setCurrentNews] = useState(null)
    const showModal = (id) => {
        setCurrentNews(id)
        setIsVisible(true)
    }
    const hideModal = (e) => {
        if (e.target.classList[0] === 'close_btn') {
            setIsVisible(false)
            setCurrentNews(null)
        }
    }
    return (
        <div className={s.news_card}>
            <img className={s.news_photo} src={`http://195.38.164.30:8001${item?.photo}`} alt={item?.name} />
            <div className={s.news_container}>
                <p className={s.created}>
                    <span>Медиа</span>
                    <span>{item?.created_at}</span>
                </p>
                <h4>{item?.name.length > 40 ? item?.name.slice(0, 40) + '...' : item?.name}</h4>
                <p className={s.description}>{item?.description?.slice(0, 120) + '...'}</p>
                <div className={s.more_wrapper}>
                    <button onClick={() => showModal(item?.id)} className={s.more}>Подробнее</button>
                </div>
                <div className={s.author_block}>
                    <img className={s.author_photo} src={`http://195.38.164.30:8001${item?.profile_pickture}`} alt={item?.author} />
                    <span>{item?.author}</span>
                </div>
            </div>

            {isVisible && currentNews === item.id ? <NewsModal hide={hideModal} news={item} /> : null}
        </div>
    );
};

export default NewsCard;
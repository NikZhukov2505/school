import React, { useContext } from 'react';
import { SchoolContext } from './../../schoolContext';
import s from './News.module.css'
import NewsCard from './Newscard';

const News = () => {
    const { news } = useContext(SchoolContext)
    return (
        <section className={s.news_section} id='news'>
            <h2 className={s.title}>Новости</h2>
            <div className={s.news_wrapper}>
                {
                    news?.reverse()?.map(item => <NewsCard key={item.id} item={item} />)
                }
            </div>
        </section>
    );
};

export default News;
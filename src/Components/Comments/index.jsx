import React, { useContext } from 'react';
import s from './Comments.module.css'
import review from '../../assets/reviews.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Navigation } from "swiper";
import { SchoolContext } from '../../schoolContext';

const Comments = () => {
    const { rewies } = useContext(SchoolContext)
    return (
        <section className={s.comments_section} id='comments'>
            <h4 className={s.title}>Отзывы</h4>
            <h2 className={s.subtitle}>Что говорят о нашей школе?</h2>
            <div className={s.container}>
                <div className={s.coments_wrapper}>
                    <div className={s.img_block}>
                        <img src={review} alt="отзывы" />
                    </div>
                    <div className={s.swiper_comments_wrapper}>
                        <Swiper
                            effect={"flip"}
                            grabCursor={true}
                            navigation={true}
                            modules={[EffectFlip, Navigation]}
                            className={`${s.mySwiper} swiper_comments`}
                        >
                            {
                                rewies?.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className={s.comment_block}>
                                            <p className={s.comment}>{item?.comment}</p>
                                            <div className={s.info_parent_block}>
                                                <img className={s.photo} src={`http://195.38.164.30:8001${item?.photo}`} alt={item?.name} />
                                                <div className={s.parent_name_block}>
                                                    <h4>{item?.name}</h4>
                                                    <h6>{item?.parent}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comments;
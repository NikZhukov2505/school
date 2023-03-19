import React, { useContext } from 'react';
import './GallerySwiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import { EffectCoverflow, EffectCube, Keyboard, Navigation } from "swiper";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { SchoolContext } from '../../../schoolContext';


const GallerySwiper = () => {
    const { galeries } = useContext(SchoolContext)
    return (
        <div className='wrapper_swiper'>
            <LightGallery
                selector='.gallery_item'
                speed={800}
                counter={false}
                download={false}
            >
                <div className='ellips_top'></div>
                {
                    window.screen.width <= 992
                        ?
                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            navigation={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            loop
                            modules={[EffectCube, Navigation]}
                            className='swiper_cube'
                        >
                            {
                                galeries?.map(item => (
                                    <SwiperSlide key={item?.id}>
                                        <a className='gallery_item' href={`http://195.38.164.30:8001${item?.photo}`}>
                                            <img src={`http://195.38.164.30:8001${item?.photo}`} alt={item?.name} />
                                        </a>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        :
                        <Swiper

                            effect={"coverflow"}
                            grabCursor={true}
                            slidesPerView={3}
                            centeredSlides={true}
                            keyboard={true}
                            loop={true}
                            coverflowEffect={{
                                rotate: 5,
                                stretch: -20,
                                depth: 40,
                                modifier: 5,
                                slideShadows: window.screen.width <= 1024 ? false : true
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Keyboard]}
                            className="mySwiper"
                        >
                            {
                                galeries?.map(item => (
                                    <SwiperSlide key={item?.id}>
                                        <a className='gallery_item' href={`http://195.38.164.30:8001${item?.photo}`}>
                                            <img src={`http://195.38.164.30:8001${item?.photo}`} alt={item?.name} />
                                        </a>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                }

                <div className='ellips_bottom'></div>
            </LightGallery>
        </div>
    );
};

export default GallerySwiper;
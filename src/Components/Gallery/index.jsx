import React from 'react';
import s from './Gallery.module.css'
import GallerySwiper from './GallerySwiper';


const Gallery = () => {
    return (
        <section id='gallery' className={s.gallery_block}>
            <h3 className={s.title}>Галерея</h3>
            <h2 className={s.our_photos}>Наши фоточки</h2>
            <GallerySwiper />
        </section>
    );
};

export default Gallery;
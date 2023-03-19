import React from 'react';
import s from './Video.module.css'

const VideoComponent = () => {
    return (
        <section className={s.video_section} id='video'>
            <iframe
                className={s.player}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oMLVIhyDjSc"
                title="Видео про нашу Школу Ак-Тилек"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </section>
    );
};

export default VideoComponent;
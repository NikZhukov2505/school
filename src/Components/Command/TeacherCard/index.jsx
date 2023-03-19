import React from 'react';
import s from './TeacherCard.module.css'

const TeacherCard = ({ data }) => {
    return (
        <div className={s.teacher_card}>
            <p className={s.position}>{data?.position}</p>
            <div className={s.teacher_photo_block}>
                <img src={`http://195.38.164.30:8001${data?.photo}`} alt={data?.name} />
            </div>
            <h2 className={s.teacher_name}>{data?.name}</h2>
        </div>
    );
};

export default TeacherCard;
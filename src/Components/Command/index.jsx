import React, { useContext } from 'react';
import s from './Command.module.css'
import { SchoolContext } from './../../schoolContext';
import TeacherCard from './TeacherCard/index';

const Command = () => {
    const { teachers } = useContext(SchoolContext)
    return (
        <section id='command'>
            <div className={s.command_container}>
                <h4 className={s.title}>Педагоги</h4>
                <h2 className={s.subtitle}>Наша команда профессионалов</h2>
                <div className={s.teachers_wrapper}>
                    {
                        teachers?.map(el => <TeacherCard key={el?.id} data={el} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Command;
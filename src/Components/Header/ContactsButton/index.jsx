import React, { useRef, useState } from 'react';
import s from '../Header.module.css'

const ContactsButton = ({ info }) => {
    const { number_1, number_2, number_3 } = info
    const [showContacts, setShowContacts] = useState(false)
    const phonesBlock = useRef(null)
    const toggleClass = () => {
        if (phonesBlock.current.classList[2] == 'phonesBlock') {
            phonesBlock.current.classList.add('animate__zoomOutUp')
        }
        showContacts ?
            phonesBlock.current.classList.replace('animate__zoomInDown', 'animate__zoomOutUp')
            :
            phonesBlock.current.classList.replace('animate__zoomOutUp', 'animate__zoomInDown')
    }
    const toggleVisible = () => {
        toggleClass()
        setShowContacts(!showContacts)
    }
    return (
        <div className={s.contacts_block}>
            <button onClick={toggleVisible}>Контакты</button>
            {
                <div ref={phonesBlock} style={{ opacity: showContacts ? 1 : 0 }} className={`${s.contacts}  animate__animated phonesBlock`}>
                    <p><a className={s.phones} href={`tel:${number_1}`}>{number_1}</a></p>
                    <p><a className={s.phones} href={`tel:${number_2}`}>{number_2}</a></p>
                    <p><a className={s.phones} href={`tel:${number_3}`}>{number_3}</a></p>
                </div>
            }
        </div>
    );
};

export default ContactsButton;
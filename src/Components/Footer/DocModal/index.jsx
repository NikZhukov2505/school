import React from 'react';
import s from './DocModal.module.css'
import report from '../../../assets/files/отчет.pdf'
import attestation from '../../../assets/files/свидетельство.pdf'
import charter from '../../../assets/files/Устав.pdf'
import license from '../../../assets/files/Лицензия.pdf'
import certificate from '../../../assets/files/Сертификат.pdf'
import conclusion from '../../../assets/files/Закл. ВЭК.pdf'
import close from '../../../assets/close.png'

const DocModal = ({ hide }) => {
    return (
        <div onClick={hide} className={`close_btn ${s.document_modal} animate__animated animate__fadeInUpBig animate__faster`}>
            <div className={s.modal_container}>
                <img onClick={hide} className={`close_btn ${s.close}`} src={close} alt="close" />
                <a rel="noopener noreferrer" href={report} target='_blank' className={s.document_items}>Отчет по самооценке</a>
                <a rel="noopener noreferrer" href={attestation} target='_blank' className={s.document_items}>Свидетельство о регистрации</a>
                <a rel="noopener noreferrer" href={charter} target='_blank' className={s.document_items}>Устав</a>
                <a rel="noopener noreferrer" href={license} target='_blank' className={s.document_items}>Лицензия</a>
                <a rel="noopener noreferrer" href={certificate} target='_blank' className={s.document_items}>Сертификат</a>
                <a rel="noopener noreferrer" href={conclusion} target='_blank' className={s.document_items}>Заключение Экспертной Комиссии</a>
            </div>
        </div>
    );
};

export default DocModal;
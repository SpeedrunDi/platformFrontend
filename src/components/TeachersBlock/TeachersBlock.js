import React from 'react';
import TeacherCard from "./TeacherCard/TeacherCard";
import './TeachersBlock.scss';
import teacher_1 from '../../assets/icons/teacher_1.svg';
import teacher_2 from '../../assets/icons/teacher_2.svg';

const TeachersBlock = () => {

    return (
        <>
            <div className={'teachersBlock'}>
                <div className={'container'}>
                    <div className={'teachersBlock_headline'}>
                        <div className='teachersBlock_text'>
                            <h5 className={'teachersBlock_title'}>Преподаватели — практикующие эксперты</h5>
                            <span className={'teachersBlock_subtitle'}>Доверьте свое обучение специалистам</span>
                        </div>
                    </div>
                    <div className={'cardsBlock'}>
                        <div className={'cardsBlock_content'}>
                            <TeacherCard image={teacher_1}
                                         name={'Александр Гаврилин'}
                                         description={'Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС'
                                         }/>
                            <TeacherCard image={teacher_2}
                                         name={'Александр Гаврилин'}
                                         description={'Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС'
                                         }/>
                        </div>
                        <div className={'cardsBlock_navigation'}>
                            <button className={'cardsBlock_navigation_button'}>
                                <svg width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.70994 9.87998L2.82994 5.99998L6.70994 2.11998C7.09994 1.72998 7.09994 1.09998 6.70994 0.70998C6.31994 0.31998 5.68994 0.31998 5.29994 0.70998L0.709941 5.29998C0.319942 5.68998 0.319942 6.31998 0.709941 6.70998L5.29994 11.3C5.68994 11.69 6.31994 11.69 6.70994 11.3C7.08994 10.91 7.09994 10.27 6.70994 9.87998Z"/>
                                </svg>
                            </button>
                            <button className={'cardsBlock_navigation_button'}>
                                <svg width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.29006 9.87998L5.17006 5.99998L1.29006 2.11998C0.900059 1.72998 0.900059 1.09998 1.29006 0.70998C1.68006 0.31998 2.31006 0.31998 2.70006 0.70998L7.29006 5.29998C7.68006 5.68998 7.68006 6.31998 7.29006 6.70998L2.70006 11.3C2.31006 11.69 1.68006 11.69 1.29006 11.3C0.910059 10.91 0.900059 10.27 1.29006 9.87998Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeachersBlock;
import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <a href="#" className="main-nav__link">Каталог курсов</a>
                </li>
                <li className="main-nav__item">
                    <a href="#" className="main-nav__link">Бесплатные курсы</a>
                </li>
                <li className="main-nav__item">
                    <a href="#" className="main-nav__link">О школе</a>
                </li>
                <li className="main-nav__item">
                    <a href="#" className="main-nav__link">Отзывы</a>
                </li>
                <li className="main-nav__item">
                    <a href="#" className="main-nav__link">Регистрация</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
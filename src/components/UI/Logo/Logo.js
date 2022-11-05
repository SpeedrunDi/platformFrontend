import React from 'react';
import Eduspace from '../../../assets/logo/eduspace.svg';
import './Logo.scss';

const Logo = ({className}) => {
    return (
        <a href={'#'} className={`logo ${className}`}>
          <img src={Eduspace} alt='Eduspace'/>
        </a>
    );
};

export default Logo;
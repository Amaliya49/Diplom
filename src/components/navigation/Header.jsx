import React from 'react';
import './navigation.css'
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

const Header = () => {
    return <div className='header-container'>
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight />
    </div>;
}

export default Header;

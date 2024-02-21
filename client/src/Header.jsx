import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './FinalGirlWide.png'

function Header() {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='App-header'>
            <img src={logo} alt="Logo" className="Header-logo" />
            <button>Settings</button>
        </div>
    );
}

export default Header;

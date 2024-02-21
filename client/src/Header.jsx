import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './FinalGirlWide.png'

function Header() {
    const location = useLocation();

    // Hide the header on the home page ("/")
    if (location.pathname === '/') {
        return null;
    }

    // Render the header on all other pages
    return (
        <div className='App-header'>
            <img src={logo} alt="Logo" className="Header-logo" />
            <button>Settings</button>
        </div>
    );
}

export default Header;

import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './FinalGirlWide.png'
import SettingsPopup from './SettingsPopup';

function Header() {
    const location = useLocation();
    const [ showPopup, setShowPopup ] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const isUserAccountRoute = location.pathname.startsWith('/play/');

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='App-header'>
            <img src={logo} alt="Logo" className="Header-logo" />
            {isUserAccountRoute && <button onClick={togglePopup}>Settings</button>}
            {showPopup && <SettingsPopup onClose={togglePopup} />}
        </div>
    );
}

export default Header;

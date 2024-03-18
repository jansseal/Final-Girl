import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './FinalGirlWide.png'
import SettingsPopup from './SettingsPopup';
import HowToPlayPopup from './HowToPlayPopup';

function Header() {
    const location = useLocation();
    const [ showHowToPlayPopup, setShowHowToPlayPopup ] = useState(false);
    const [ showSettingsPopup, setShowSettingsPopup ] = useState(false);

    const toggleHowToPlayPopup = () => {
        setShowHowToPlayPopup(!showHowToPlayPopup);
    };

    const toggleSettingsPopup = () => {
        setShowSettingsPopup(!showSettingsPopup);
    };

    const isUserAccountRoute = location.pathname.startsWith('/play/');

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='App-header'>
            <img src={logo} alt="Logo" className="Header-logo" />
            <div className='header-buttons'>
                {isUserAccountRoute && (
                    <>
                        <button onClick={toggleHowToPlayPopup}>How to Play</button>
                        <button onClick={toggleSettingsPopup}>Settings</button>
                    </>
                )}
            </div>
            {showHowToPlayPopup && <HowToPlayPopup onClose={toggleHowToPlayPopup} />}
            {showSettingsPopup && <SettingsPopup onClose={toggleSettingsPopup} />}
        </div>
    );
}

export default Header;

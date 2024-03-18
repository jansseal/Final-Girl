import React from 'react';

function HowToPlayPopup({ onClose }) {

    return (
        <div className="popup how-to-play-popup">
            <div className="popup-inner">
                <h2>How To Play</h2>
                <p>In this game, there will be a prompt displayed on the screen, along with pre-determined choices you can select from.</p>
                <p>Take as much time as you need and choose WISELY - this game does not allow undos / redos.</p>
                <p>The only ways to start over are after a you complete the game OR a choice you make results in Winona's demise.</p>
                <p>The Choice History button can be used to review the choices you've made thus far.</p>
                <p>The Settings button allows you to adjust the game's text size and log out of your account.</p>
                <p>NOTE: In-game progress is saved after every choice is made, so you can log out at anytime.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default HowToPlayPopup;
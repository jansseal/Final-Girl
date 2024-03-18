import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HowToPlayPopup from './HowToPlayPopup';

function Intro() {
    const { username } = useParams();
    const [ showHowToPlayPopup, setShowHowToPlayPopup ] = useState(false);
    const navigate = useNavigate();

    const toggleHowToPlayPopup = () => {
        setShowHowToPlayPopup(!showHowToPlayPopup);
    };

    const handleBeginClick = () => {
        navigate(`/play/${username}`);
    }

    return (
        <div className="Intro">
            <h1>Welcome to Final Girl</h1>
            <p>You are Winona.</p>
            <p>In the serene embrace of a quaint AirBnB, Winona seeks solace from the clamor of her hectic life, craving nothing more than the gentle crackle of a welcoming fireplace and the silent companionship of her books.</p>
            <p>Little does she realize, amidst the tranquility of her secluded retreat, that she is not the only one on its premises...</p>
            <p>Will this weekend be Winona's last? It's up to YOU.</p>
            <br/>
            <div className="button-container">
                <button onClick={toggleHowToPlayPopup}>How to Play</button>
                {showHowToPlayPopup && <HowToPlayPopup username={username} onClose={toggleHowToPlayPopup} />}
                <button onClick={handleBeginClick}>Begin</button>
            </div>
        </div>
    );
}
export default Intro;
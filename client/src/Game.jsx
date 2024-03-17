import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Chapter1 from './Chapter1';
import ChoiceHistoryPopup from './ChoiceHistoryPopup';

function Game() {
    const { username } = useParams();
    const [currentChapter, setCurrentChapter] = useState('Chapter1');
    const [ showPopup, setShowPopup ] = useState(false);
    const CurrentChapterComponent = currentChapter === 'Chapter1' ? Chapter1 : null;

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='Game'>
            {CurrentChapterComponent && <CurrentChapterComponent username={username} />}
            <button onClick={togglePopup}>Choice History</button>
            {showPopup && <ChoiceHistoryPopup username={username} onClose={togglePopup} />}
        </div>
    );
}

export default Game;

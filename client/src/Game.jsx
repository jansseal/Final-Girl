import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chapter1 from './Chapter1';
import { updateCurrentPrompt, getCurrentPrompt, updateChapter } from './userModel'; 
import ChoiceHistoryPopup from './ChoiceHistoryPopup';

function Game() {
    const { username } = useParams();
    const [currentChapter, setCurrentChapter] = useState(null);
    const [ showPopup, setShowPopup ] = useState(false);
    const [ currentPrompt, setCurrentPrompt ] = useState(null);  
    
    useEffect(() => {
        getCurrentPrompt(username)
            .then(data => {
                setCurrentChapter(data.currentChapter);
                setCurrentPrompt(data.currentPrompt);
            })
            .catch(error => console.error('Error fetching current prompt:', error));
    }, [username]);

    const handleChapterCompletion = () => {
        updateCurrentPrompt(username, 0)
            .then(() => updateChapter(username))
            .then(() => {
                setCurrentChapter(prevChapter => prevChapter + 1);
                setCurrentPrompt(0);
            })
            .catch(error => console.error('Error updating current prompt and chapter:', error));
    };

    const renderChapter = () => {
        switch (currentChapter) {
            case 1:
                return <Chapter1 username={username} currentPrompt={currentPrompt} onChapterCompletion={handleChapterCompletion} />;
            default:
                return null;
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='Game'>
            {renderChapter()}
            <button onClick={togglePopup}>Choice History</button>
            {showPopup && <ChoiceHistoryPopup username={username} onClose={togglePopup} />}
        </div>
    );
}

export default Game;

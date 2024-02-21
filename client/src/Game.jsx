// state needed for current chapter, display "ChapterX" component based off state
import React from 'react';
import { useState } from 'react';
import Chapter1 from './Chapter1';

function Game() {
    const [currentChapter, setCurrentChapter] = useState('Chapter1');
    const CurrentChapterComponent = currentChapter === 'Chapter1' ? Chapter1 : null;

    return (
        <div className='Game'>
            {CurrentChapterComponent && <CurrentChapterComponent />}
        </div>
    );
}

export default Game;

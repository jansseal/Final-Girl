import React, { useState, useEffect } from 'react';
import { getChoiceHistory } from './choiceModel';

function ChoiceHistoryPopup({ username, onClose }) {
    const [choiceHistory, setChoiceHistory] = useState([]);

    useEffect(() => {
        getChoiceHistory(username)
            .then(response => {
                const history = response.data;
                setChoiceHistory(history);
            })
            .catch(error => console.error('Error fetching choice history:', error));
    }, [username]);

    return (
        <div className="popup choice-history-popup">
            <div className="popup-inner">
                <table>
                    <thead>
                        <tr>
                            <th>Prompt</th>
                            <th>Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {choiceHistory.map((choice, index) => (
                            <tr key={index}>
                                <td>{choice.prompt}</td>
                                <td>{choice.choice_text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ChoiceHistoryPopup;
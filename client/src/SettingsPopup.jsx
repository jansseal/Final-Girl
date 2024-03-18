import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function SettingsPopup({ onClose }) {
    const navigate = useNavigate();
    const [textSize, setTextSize] = useState('medium');

    useEffect(() => {
        const initialTextSize = getComputedStyle(document.documentElement).getPropertyValue('--text-size').trim();
        
        if (initialTextSize === '16px') {
            setTextSize('small');
        } else if (initialTextSize === '22px') {
            setTextSize('medium');
        } else if (initialTextSize === '28px') {
            setTextSize('large');
        } else {
            setTextSize('medium');
        }
    }, []); 

    const handleLogout = () => {
        navigate('/login');
        onClose();
    };

    const handleApplyTextSize = () => {
        let newTextSize;
        let newSubtextSize;
        switch (textSize) {
            case 'small':
                newTextSize = '16px'; 
                newSubtextSize = '14px';
                break;
            case 'medium':
                newTextSize = '22px'; 
                newSubtextSize = '20px';
                break;
            case 'large':
                newTextSize = '28px'; 
                newSubtextSize = '26px';
                break;
            default:
                newTextSize = '22px';
                newSubtextSize = '20px';
                break;
        }
        document.documentElement.style.setProperty('--text-size', newTextSize);
        document.documentElement.style.setProperty('--subtext-size', newSubtextSize);
    };


    return (
        <div className="popup settings-popup">
            <div className="popup-inner">
                <h2>Settings</h2>
                <div className="settings-options">
                    <label htmlFor="text-size">Text Size:</label>
                    <select id="text-size" value={textSize} onChange={(e) => setTextSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <button onClick={handleApplyTextSize}>Apply</button>
                </div>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default SettingsPopup;

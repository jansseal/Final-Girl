import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function SettingsPopup({ onClose }) {
    const navigate = useNavigate();
    const [textSize, setTextSize] = useState('medium');
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    useEffect(() => {
        const initialTextSize = getComputedStyle(document.documentElement).getPropertyValue('--text-size').trim();
        setTextSize(initialTextSize === '16px' ? 'small' : initialTextSize === '28px' ? 'large' : 'medium');
    }, []); 

    const handleLogout = () => {
        setShowConfirmationPopup(true);
    };

    const handleApplyTextSize = () => {
        const sizes = {
            small: { textSize: '16px', subtextSize: '14px' },
            medium: { textSize: '22px', subtextSize: '20px' },
            large: { textSize: '28px', subtextSize: '26px' },
        };
        const { textSize: newTextSize, subtextSize: newSubtextSize } = sizes[textSize] || sizes.medium;
        document.documentElement.style.setProperty('--text-size', newTextSize);
        document.documentElement.style.setProperty('--subtext-size', newSubtextSize);
    };
    
    const handleLogoutConfirmation = (confirmed) => {
        setShowConfirmationPopup(false);
        if (confirmed) {
            onClose();
            navigate('/login');
        }
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
                <br/>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={onClose}>Close</button>
            </div>
            {showConfirmationPopup && (
                <div className="popup confirmation-popup">
                    <div className="popup-inner">
                        <h2>Are you sure you want to logout?</h2>
                        <button onClick={() => handleLogoutConfirmation(true)}>Yes</button>
                        <button onClick={() => handleLogoutConfirmation(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SettingsPopup;

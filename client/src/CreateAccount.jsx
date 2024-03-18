import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { createUser } from './userModel';
import { createChoiceHistory } from './choiceModel';


function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!username.trim() || !password.trim()) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            await Promise.all([createUser(username, password), createChoiceHistory(username)]);
            navigate(`/play/${username}`);
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again.');
        }    
    };

    return (
        <div className="CreateAccount">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <br/>
                <button type="submit">Create Account</button>
                <div className='flex'>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>

            </form>
        </div>
    );
}

export default CreateAccount;

import React, { useState } from 'react';
import { createUser } from './userModel';

function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!username.trim() || !password.trim()) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            await createUser(username, password);

            setUsername('');
            setPassword('');

            alert('Account created successfully!');
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
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount;

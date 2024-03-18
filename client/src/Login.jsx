import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from './userModel';

function Login() {
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
            const userData = await loginUser(username, password);
            navigate(`/play/${userData.user.username}`);
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in. Please try again.');
        }};

    return (
        <div className="Login">
            <h2>Log Into Your Account</h2>
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
                <button type="submit">Login</button>
                <div className='flex'>
                    <p>Don't have an account?</p>
                    <Link to="/create-account">Create Account</Link>
                </div>
            </form>
        </div>
    );
}


export default Login;
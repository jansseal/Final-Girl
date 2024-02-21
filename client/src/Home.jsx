import React from 'react';
import { Link } from 'react-router-dom';
import logo from './FinalGirlWide.png'

function Home() {
    return (
        <div className="Home">
            <img src={logo} alt="Logo" className="logo" />
            <div className="button-container">
                <Link to="/login" className="login-button">Login</Link>
                <Link to="/create-account" className="create-account-button">Create Account</Link>
            </div>
        </div>
    );
}
export default Home;
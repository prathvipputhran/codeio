import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './FacultyLogin.css';

function FacultyLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in:', email, password);
        // If login is successful:
        navigate('/faculty-page');  // Use useNavigate to navigate
    };

    return (
        <div className="faculty-login-container">
            <h1 className="faculty-login-title">Faculty Login</h1>
            <input 
                type="email" 
                className="faculty-login-input"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            />
            <input 
                type="password" 
                className="faculty-login-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
            <button className="faculty-login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}    

export default FacultyLogin;

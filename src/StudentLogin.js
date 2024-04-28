import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';


function StudentLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in:', email, password);
        // If login is successful:
        navigate('/student-page');  // Correct usage of navigate
    };

    return (
        <div className="student-login-container">
            <h1 className="student-login-title">Student Login</h1>
            <input 
                type="email" 
                className="student-login-input"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            />
            <input 
                type="password" 
                className="student-login-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
            <button className="student-login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}    

export default StudentLogin;

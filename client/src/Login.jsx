import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            if (response.data === "Success") {
                localStorage.setItem('username', email); // Store username in local storage upon successful login
                navigate('/quiz-selection'); // Redirect to quiz selection page
            } else {
                setError('Invalid credentials');
                setPassword('');
            }
        } catch (error) {
            console.error('Error occurred while logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Log In</button>
                </div>
            </form>
            <p>Not registered yet? <Link to="/register">Sign Up</Link></p>
        </div>
    );
}

export default Login;

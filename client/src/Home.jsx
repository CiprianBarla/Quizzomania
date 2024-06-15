import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="logo">Quizomania</div>
                <div className="nav-links">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/login">
                        <button className="action-button login">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="action-button signup">Sign Up</button>
                    </Link>
                </div>
            </nav>
            <h2>Welcome to Quizomania!</h2>
            <div className="quiz-message">
                <p>Login or Signup to start the quiz</p>
            </div>
        </div>
    );
}

export default Home;

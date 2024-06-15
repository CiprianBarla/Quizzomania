import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
    return (
        <div className="about-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">Quizomania</div>
                <div className="nav-links">
                    <Link to="/" className="nav-link home">Home</Link>
                </div>
            </nav>

            {/* Content Section */}
            <div className="about-content">
                {/* Text Content */}
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                    "Welcome to Quizomania, your ultimate destination for fun and challenging quizzes!
                     Dive into a world of knowledge and excitement as you explore a wide range of quiz categories, 
                     from general trivia to specific interests like history, science, pop culture, and more.
                    Test your wits, challenge your friends, and earn bragging rights with every correct answer. 
                    Whether you're a seasoned quizzer or a curious beginner, Quizomania offers an engaging experience for all. 
                    Join our vibrant community of quiz enthusiasts today and embark on a journey of learning, discovery, and endless entertainment. 
                    Let the games begin at Quizomania!"
                    </p>
                </div>

                {/* Image */}
                <div className="about-image">
                    <img src="https://www.slido.com/static/slido-live-quizzes-hero.a15bccb1.1600.jpg" alt="About Us Image" />
                </div>
            </div>
        </div>
    );
}

export default About;

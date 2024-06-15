import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Signup';
import Login from './Login';
import Home from './Home';
import QuizSelection from './QuizSelection';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import About from './About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<HomeWithNav />} />
                <Route path='/quiz-selection' element={<QuizSelection />} />
                <Route path='/quiz/:type' element={<QuizWrapper />} />
                <Route path='/quiz/:type/result' element={<QuizResultWrapper />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

// Wrapper component to handle quiz route with type parameter
function QuizWrapper() {
    const { type } = useParams();
    return <Quiz type={type} />;
}

// Wrapper component to handle quiz result route with type parameter
function QuizResultWrapper() {
    const { type } = useParams();
    return <QuizResult type={type} />;
}

function HomeWithNav() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">Quizomania</div>
                <div className="nav-links">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Sign Up</Link>
                </div>
            </nav>
            <Home />
        </div>
    );
}

export default App;

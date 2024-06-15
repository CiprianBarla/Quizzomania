import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the same CSS file used for home styling

function QuizSelection() {
    return (
        <div className="home-container">
            <h1>PLease Read the terms and conditions before Starting the Quiz.</h1>
            <h3>1. Quiz contains 18 questions of type MCQ, True or False, and image identification</h3>
            <h3>2. Please  select appropriate option in each question.</h3>
            <h3>3. Once Clicked on next question the previous questions will not be visited.</h3>
            <h3>4. Please Do not refresh the quiz before completion  </h3>
            <h3>5. After clickig on finish quiz button at the last question the candidate will be able to see the score obtained.  </h3>
            <h3>6. Once completed candidate can logout or reattempt the same quiz but the responses will be saved  </h3>
            <h3>7. Click the Start Quiz Button to start the quiz.  </h3>
            <div className="quiz-types">
                <Link to="/quiz/current-affairs">
                    <button className="quiz-type-button">Start Quiz</button>
                </Link>
                {/* <Link to="/quiz/aptitude">
                    <button className="quiz-type-button">Aptitude</button>
                </Link>
                <Link to="/quiz/technical">
                    <button className="quiz-type-button">Technical</button>
                </Link>
                Add more quiz types as needed */}
            </div>
        </div>
    );
}

export default QuizSelection;

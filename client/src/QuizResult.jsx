// // import React, { useState, useEffect } from 'react';
// // import { Link, useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import './quiz.css';
// // function QuizResult() {
// //     const { type } = useParams();
// //     const [score, setScore] = useState(null);
// //     const [totalQuestions, setTotalQuestions] = useState(0);

// //     useEffect(() => {
// //         const fetchUserScore = async () => {
// //             const username = localStorage.getItem('username');
// //             if (!username) {
// //                 console.error('User is not logged in.');
// //                 return;
// //             }

// //             try {
// //                 const response = await axios.get(`http://localhost:3001/user-response/${username}/${type}`);
// //                 const userResponse = response.data;
// //                 if (userResponse) {
// //                     const { score, responses } = userResponse;
// //                     setScore(score);
// //                     setTotalQuestions(responses.length);
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching user score:', error);
// //             }
// //         };

// //         fetchUserScore();
// //     }, [type]);

// //     return (
// //         <div className="quiz-result-container">
// //             <h2>Quiz Completed!</h2>
// //             {score !== null && (
// //                 <p>Your Score: {score} / {totalQuestions}</p>
// //             )}
// //             <div className="button-container">
// //                 <Link to="/home">
// //                     <button className="action-button">Log out</button>
// //                 </Link>
// //                 <Link to="/quiz-selection">
// //                     <button className="action-button">Restart Quiz</button>
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default QuizResult;

// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './quiz.css';

// function QuizResult() {
//     const { type } = useParams();
//     const [score, setScore] = useState(null);
//     const [totalQuestions, setTotalQuestions] = useState(0);
//     const [responses, setResponses] = useState([]);

//     useEffect(() => {
//         const fetchUserScore = async () => {
//             const username = localStorage.getItem('username');
//             if (!username) {
//                 console.error('User is not logged in.');
//                 return;
//             }

//             try {
//                 const response = await axios.get(`http://localhost:3001/user-response/${username}/${type}`);
//                 const userResponse = response.data;
//                 if (userResponse) {
//                     const { score, responses } = userResponse;
//                     setScore(score);
//                     setTotalQuestions(responses.length);
//                     setResponses(responses);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user score:', error);
//             }
//         };

//         fetchUserScore();
//     }, [type]);

//     return (
//         <div className="quiz-result-container">
//             <h2>Quiz Completed!</h2>
//             {score !== null && (
//                 <div>
//                     <p>Your Score: {score} / {totalQuestions}</p>
//                     <div className="result-details">
//                         {responses.map((response, index) => (
//                             <div key={index} className="question-result">
//                                 <p><strong>Question {index + 1}:</strong> {response.question}</p>
//                                 <p><strong>Your Answer:</strong> {response.userAnswer}</p>
//                                 <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//             <div className="button-container">
//                 <Link to="/home">
//                     <button className="action-button">Log out</button>
//                 </Link>
//                 <Link to="/quiz-selection">
//                     <button className="action-button">Restart Quiz</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default QuizResult;

// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './quiz.css';

// function QuizResult() {
//     const { type } = useParams();
//     const [score, setScore] = useState(null);
//     const [totalQuestions, setTotalQuestions] = useState(0);
//     const [responses, setResponses] = useState([]);

//     useEffect(() => {
//         const fetchUserScore = async () => {
//             const username = localStorage.getItem('username');
//             if (!username) {
//                 console.error('User is not logged in.');
//                 return;
//             }

//             try {
//                 const response = await axios.get(`http://localhost:3001/user-response/${username}/${type}`);
//                 const userResponse = response.data;
//                 if (userResponse) {
//                     const { score, responses } = userResponse;
//                     setScore(score);
//                     setTotalQuestions(responses.length);
//                     setResponses(responses);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user score:', error);
//             }
//         };

//         fetchUserScore();
//     }, [type]);

//     return (
//         <div className="quiz-result-container">
//             <h2>Quiz Completed!</h2>
//             {score !== null && (
//                 <div>
//                     <p>Your Score: {score} / {totalQuestions}</p>
//                     <div className="result-details">
//                         {responses.map((response, index) => (
//                             <div key={index} className="question-result">
//                                 <p><strong>Question {index + 1}:</strong> {response.question}</p>
//                                 <p><strong>Your Answer:</strong> {response.userAnswer}</p>
//                                 <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//             <div className="button-container">
//                 <Link to="/home">
//                     <button className="action-button">Log out</button>
//                 </Link>
//                 <Link to="/quiz-selection">
//                     <button className="action-button">Restart Quiz</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default QuizResult;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './quiz.css';

function QuizResult() {
    const { type } = useParams();
    const [score, setScore] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchUserScore = async () => {
            const username = localStorage.getItem('username');
            if (!username) {
                console.error('User is not logged in.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3001/user-response/${username}/${type}`);
                const userResponse = response.data;
                if (userResponse) {
                    const { score, responses } = userResponse;
                    setScore(score);
                    setTotalQuestions(responses.length);
                    setResponses(responses);
                }
            } catch (error) {
                console.error('Error fetching user score:', error);
            }
        };

        fetchUserScore();
    }, [type]);

    return (
        <div className="quiz-result-container">
            <h2>Quiz Completed!</h2>
            {score !== null && (
                <div>
                    <p>Your Score: {score} / {totalQuestions}</p>
                    <div className="result-details">
                        {responses.map((response, index) => (
                            <div key={index} className="question-result">
                                <p><strong>Question {index + 1}:</strong> {response.question}</p>
                                <p><strong>Your Answer:</strong> {response.userAnswer}</p>
                                <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="button-container">
                <Link to="/home">
                    <button className="action-button">Log out</button>
                </Link>
                <Link to="/quiz-selection">
                    <button className="action-button">Restart Quiz</button>
                </Link>
            </div>
        </div>
    );
}

export default QuizResult;


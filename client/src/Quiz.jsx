// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Quiz() {
//     const { type } = useParams();
//     const navigate = useNavigate();

//     const sampleQuestions = {
//         "current-affairs": [
//             {
//                 "question": "What is the capital of France?",
//                 "options": ["Paris", "London", "Rome", "Berlin"],
//                 "answer": "Paris"
//             },
//             {
//                 "question": "Who is the Prime Minister of India?",
//                 "options": ["Narendra Modi", "Manmohan Singh", "Rahul Gandhi", "Amit Shah"],
//                 "answer": "Narendra Modi"
//             },
//             {
//                 "question": "What is the currency of Japan?",
//                 "options": ["Yen", "Euro", "Dollar", "Pound"],
//                 "answer": "Yen"
//             }
//         ],
//         "aptitude": [
//             {
//                 "question": "What is 2 + 2?",
//                 "options": ["3", "4", "5", "6"],
//                 "answer": "4"
//             },
//             {
//                 "question": "If a car travels 50 miles in 2 hours, what is its speed?",
//                 "options": ["20 mph", "25 mph", "30 mph", "35 mph"],
//                 "answer": "25 mph"
//             },
//             {
//                 "question": "What is the square root of 144?",
//                 "options": ["12", "14", "16", "18"],
//                 "answer": "12"
//             }
//         ],
//         "technical": [
//             {
//                 "question": "What does HTML stand for?",
//                 "options": ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
//                 "answer": "Hyper Text Markup Language"
//             },
//             {
//                 "question": "Which language is used for styling web pages?",
//                 "options": ["HTML", "CSS", "JavaScript", "Python"],
//                 "answer": "CSS"
//             },
//             {
//                 "question": "What does CSS stand for?",
//                 "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
//                 "answer": "Cascading Style Sheets"
//             }
//         ]
//     };

//     const [questions, setQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [userResponses, setUserResponses] = useState([]);
//     const [quizCompleted, setQuizCompleted] = useState(false);

//     useEffect(() => {
//         const quizQuestions = sampleQuestions[type];
//         if (quizQuestions) {
//             setQuestions(quizQuestions);
//             setCurrentQuestionIndex(0);
//             setUserResponses(new Array(quizQuestions.length).fill('')); // Initialize userResponses array
//         }
//     }, [type]);

//     const currentQuestion = questions[currentQuestionIndex];

//     const handleOptionSelect = (option) => {
//         const updatedResponses = [...userResponses];
//         updatedResponses[currentQuestionIndex] = option;
//         setUserResponses(updatedResponses);
//         setSelectedOption(option);
//     };

//     const handleNextQuestion = () => {
//         const nextQuestionIndex = currentQuestionIndex + 1;
//         if (nextQuestionIndex < questions.length) {
//             setCurrentQuestionIndex(nextQuestionIndex);
//             setSelectedOption(userResponses[nextQuestionIndex]); // Set selected option for next question
//         } else {
//             finishQuiz();
//         }
//     };

//     const finishQuiz = async () => {
//         const username = localStorage.getItem('username');
//         if (!username) {
//             console.error('User is not logged in.');
//             return;
//         }

//         try {
//             let calculatedScore = 0;

//             // Calculate score based on user responses
//             questions.forEach((question, index) => {
//                 if (userResponses[index] === question.answer) {
//                     calculatedScore++;
//                 }
//             });

//             const response = await axios.post('http://localhost:3001/user-response', {
//                 username,
//                 quizType: type,
//                 responses: userResponses.map((userAnswer, index) => ({
//                     question: questions[index].question,
//                     userAnswer,
//                     correctAnswer: questions[index].answer
//                 })),
//                 score: calculatedScore // Use calculated score for posting to database
//             });

//             console.log(response.data);
//             setQuizCompleted(true);
//             navigate(`/quiz/${type}/result`); // Navigate to quiz result page
//         } catch (error) {
//             console.error('Error saving user response:', error);
//         }
//     };

//     if (questions.length === 0) {
//         return <div>Loading...</div>;
//     }

//     if (quizCompleted) {
//         // Render a placeholder while redirecting
//         return <p>Quiz completed. Redirecting to result...</p>;
//     }

//     return (
//         <div className="quiz-container">
//             <h2>{type} Quiz</h2>
//             <h3>Question {currentQuestionIndex + 1}</h3>
//             <p>{currentQuestion.question}</p>
//             <ul>
//                 {currentQuestion.options.map((option, index) => (
//                     <li key={index}>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="options"
//                                 value={option}
//                                 checked={selectedOption === option}
//                                 onChange={() => handleOptionSelect(option)}
//                             />
//                             {option}
//                         </label>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleNextQuestion} disabled={!selectedOption}>
//                 {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//             </button>
//         </div>
//     );
// }

// export default Quiz;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Quiz() {
//     const { type } = useParams();
//     const navigate = useNavigate();

//     const sampleQuestions = {
//         "current-affairs": [
//             {
//                 "question": "What is the capital of France?",
//                 "options": ["Paris", "London", "Rome", "Berlin"],
//                 "answer": "Paris"
//             },
//             {
//                 "question": "Who is the Prime Minister of India?",
//                 "options": ["Narendra Modi", "Manmohan Singh", "Rahul Gandhi", "Amit Shah"],
//                 "answer": "Narendra Modi"
//             },
//             {
//                 "question": "What is the currency of Japan?",
//                 "options": ["Yen", "Euro", "Dollar", "Pound"],
//                 "answer": "Yen",
//                 "image": "https://st4.depositphotos.com/1842549/21096/i/450/depositphotos_210965824-stock-photo-yen-icon.jpg" // Example image URL
//             }
//         ],
//         "aptitude": [
//                         {
//                             "question": "What is 2 + 2?",
//                             "options": ["3", "4", "5", "6"],
//                             "answer": "4"
//                         },
//                         {
//                             "question": "If a car travels 50 miles in 2 hours, what is its speed?",
//                             "options": ["20 mph", "25 mph", "30 mph", "35 mph"],
//                             "answer": "25 mph"
//                         },
//                         {
//                             "question": "What is the square root of 144?",
//                             "options": ["12", "14", "16", "18"],
//                             "answer": "12"
//                         }
//                     ],
//                     "technical": [
//                         {
//                             "question": "What does HTML stand for?",
//                             "options": ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
//                             "answer": "Hyper Text Markup Language"
//                         },
//                         {
//                             "question": "Which language is used for styling web pages?",
//                             "options": ["HTML", "CSS", "JavaScript", "Python"],
//                             "answer": "CSS"
//                         },
//                         {
//                             "question": "What does CSS stand for?",
//                             "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
//                             "answer": "Cascading Style Sheets"
//                         }
//                     ]
//     };

//     const [questions, setQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [userResponses, setUserResponses] = useState([]);
//     const [quizCompleted, setQuizCompleted] = useState(false);

//     useEffect(() => {
//         const quizQuestions = sampleQuestions[type];
//         if (quizQuestions) {
//             setQuestions(quizQuestions);
//             setCurrentQuestionIndex(0);
//             setUserResponses(new Array(quizQuestions.length).fill('')); // Initialize userResponses array
//         }
//     }, [type]);

//     const currentQuestion = questions[currentQuestionIndex];

//     const handleOptionSelect = (option) => {
//         const updatedResponses = [...userResponses];
//         updatedResponses[currentQuestionIndex] = option;
//         setUserResponses(updatedResponses);
//         setSelectedOption(option);
//     };

//     const handleNextQuestion = () => {
//         const nextQuestionIndex = currentQuestionIndex + 1;
//         if (nextQuestionIndex < questions.length) {
//             setCurrentQuestionIndex(nextQuestionIndex);
//             setSelectedOption(userResponses[nextQuestionIndex]); // Set selected option for next question
//         } else {
//             finishQuiz();
//         }
//     };

//     const finishQuiz = async () => {
//         const username = localStorage.getItem('username');
//                 if (!username) {
//                     console.error('User is not logged in.');
//                     return;
//                 }
        
//                 try {
//                     let calculatedScore = 0;
        
//                     // Calculate score based on user responses
//                     questions.forEach((question, index) => {
//                         if (userResponses[index] === question.answer) {
//                             calculatedScore++;
//                         }
//                     });
        
//                     const response = await axios.post('http://localhost:3001/user-response', {
//                         username,
//                         quizType: type,
//                         responses: userResponses.map((userAnswer, index) => ({
//                             question: questions[index].question,
//                             userAnswer,
//                             correctAnswer: questions[index].answer
//                         })),
//                         score: calculatedScore // Use calculated score for posting to database
//                     });
        
//                     console.log(response.data);
//                     setQuizCompleted(true);
//                     navigate(`/quiz/${type}/result`); // Navigate to quiz result page
//                 } catch (error) {
//                     console.error('Error saving user response:', error);
//                 }
//     };

//     if (questions.length === 0) {
//         return <div>Loading...</div>;
//     }

//     if (quizCompleted) {
//         return <p>Quiz completed. Redirecting to result...</p>;
//     }

//     return (
//         <div className="quiz-container">
//             <h2>{type} Quiz</h2>
//             <h3>Question {currentQuestionIndex + 1}</h3>
//             {currentQuestion.image && (
//                 <img src={currentQuestion.image} alt="Question Image" style={{ maxWidth: '50%', marginBottom: '20px', marginTop: '10px' }} />
//             )}
//             <p>{currentQuestion.question}</p>
//             <ul>
//                 {currentQuestion.options.map((option, index) => (
//                     <li key={index}>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="options"
//                                 value={option}
//                                 checked={selectedOption === option}
//                                 onChange={() => handleOptionSelect(option)}
//                             />
//                             {String.fromCharCode(65 + index)}. {option}
//                         </label>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleNextQuestion} disabled={!selectedOption}>
//                 {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//             </button>
//         </div>
//     );
// }

// export default Quiz;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Quiz() {
    const { type } = useParams();
    const navigate = useNavigate();

    const sampleQuestions = {
        "current-affairs": [
            {
                "question": " The this keyword in a regular function refers to the global object (window in the browser) when the function is called in non-strict mode.",
                "options": ["True", "False"],
            "answer": "True"
          },
            {
                "question": "Which of the following statements are True ?\n\n (i) Javascript is an object-oriented language \n(ii) Javascript is an object based language\n\n(iii)Javascript is a High-Level language\n\n(iv) Javascript is an Assembly Language",
                "options": ["(i) only", "Both (i) & (ii)", "(i),(ii) & (iii)", "(ii) only"],
                "answer": "(ii) only"
            },
            {
                "question": "What is the currency of Japan?",
                "options": ["Yen", "Euro", "Dollar", "Pound"],
                "answer": "Yen",
                "image": "https://st4.depositphotos.com/1842549/21096/i/450/depositphotos_210965824-stock-photo-yen-icon.jpg" // Example image URL
            },
            {
                "question": "Is the Eiffel Tower located in France?",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                           "question": "If a car travels 50 miles in 2 hours, what is its speed?",
                           "options": ["20 mph", "25 mph", "30 mph", "35 mph"],
                          "answer": "25 mph"
            },
            {
                         "question": "Is 10 a prime number?",
                         "options": ["True", "False"],
                     "answer": "False"
                   },
                   {
                           "question": "What does HTML stand for?",
                          "options": ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
                            "answer": "Hyper Text Markup Language"
                        },
                       {
                           "question": "Which language is used for styling web pages?",
                          "options": ["HTML", "CSS", "JavaScript", "Python"],
                           "answer": "CSS"
                      },
                      {
                        "question": "What is this data structure?",
                        "options": ["Binary Tree","Linked List","Graph","Stack"],
                        "answer": "Binary Tree",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png" // Example image URL
                    },
                    {
                        "question": "Which sorting algorithm does this diagram represent?",
                        "options": ["Quick sort","Merge sort","Bubble sort","Insertion sort"],
                        "answer": "Quick sort",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif" // Example image URL
                    },
                    {
                        "question": "What is this topology called",
                        "options": ["Star topology","Mesh topology","Bus topology","Ring topology"],
                        "answer": "Star topology",
                        "image": "https://static.javatpoint.com/computer/images/what-is-star-topology1.png" // Example image URL
                    },
                      {
                         "question": "What does CSS stand for?",
                         "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
                       "answer": "Cascading Style Sheets"
                     },
                      {
                           "question": "Is React a front-end framework?",
                            "options": ["True", "False"],
                            "answer": "True"
                        },
                        {
                            "question": " In JavaScript, undefined and null are strictly equal ('===').",
                            "options": ["True", "False"],
                        "answer": "False"
                      },
                      {
                        "question": " Arrow functions in JavaScript do not have their own this context.",
                        "options": ["True", "False"],
                    "answer": "True"
                  },
                  {
                    "question": " 'NaN' is the only value in JavaScript that is not equal to itself.",
                    "options": ["True", "False"],
                "answer": "True"
              },
              {
                "question": " The 'typeof' operator in JavaScript returns 'object' for arrays.",
                "options": ["True", "False"],
            "answer": "True"
          },
          {
            "question": "  JavaScript's 'Set' object allows storing of duplicate values.",
            "options": ["True", "False"],
        "answer": "False"
      },



            ],
        // "aptitude": [
        //     {
        //         "question": "What is 2 + 2?",
        //         "options": ["3", "4", "5", "6"],
        //         "answer": "4"
        //     },
        //     {
        //         "question": "If a car travels 50 miles in 2 hours, what is its speed?",
        //         "options": ["20 mph", "25 mph", "30 mph", "35 mph"],
        //         "answer": "25 mph"
        //     },
        //     {
        //         "question": "What is the square root of 144?",
        //         "options": ["12", "14", "16", "18"],
        //         "answer": "12"
        //     },
        //     {
        //         "question": "Is 10 a prime number?",
        //         "options": ["True", "False"],
        //         "answer": "False"
        //     }
        // ],
        // "technical": [
        //     {
        //         "question": "What does HTML stand for?",
        //         "options": ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        //         "answer": "Hyper Text Markup Language"
        //     },
        //     {
        //         "question": "Which language is used for styling web pages?",
        //         "options": ["HTML", "CSS", "JavaScript", "Python"],
        //         "answer": "CSS"
        //     },
        //     {
        //         "question": "What does CSS stand for?",
        //         "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        //         "answer": "Cascading Style Sheets"
        //     },
        //     {
        //         "question": "Is React a front-end framework?",
        //         "options": ["True", "False"],
        //         "answer": "True"
        //     }
        // ]
    };

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [userResponses, setUserResponses] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const quizQuestions = sampleQuestions[type];
        if (quizQuestions) {
            setQuestions(quizQuestions);
            setCurrentQuestionIndex(0);
            setUserResponses(new Array(quizQuestions.length).fill('')); // Initialize userResponses array
        }
    }, [type]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const updatedResponses = [...userResponses];
        updatedResponses[currentQuestionIndex] = selectedOption;
        setUserResponses(updatedResponses);

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedOption(''); // Clear selected option for the next question
        } else {
            finishQuiz(updatedResponses);
        }
    };

    const finishQuiz = async (responses) => {
        const username = localStorage.getItem('username');
        if (!username) {
            console.error('User is not logged in.');
            return;
        }

        try {
            let calculatedScore = 0;

            // Calculate score based on user responses
            questions.forEach((question, index) => {
                if (responses[index] === question.answer) {
                    calculatedScore++;
                }
            });

            const response = await axios.post('http://localhost:3001/user-response', {
                username,
                quizType: type,
                responses: responses.map((userAnswer, index) => ({
                    question: questions[index].question,
                    userAnswer,
                    correctAnswer: questions[index].answer
                })),
                score: calculatedScore // Use calculated score for posting to database
            });

            console.log(response.data);
            setQuizCompleted(true);
            navigate(`/quiz/${type}/result`); // Navigate to quiz result page
        } catch (error) {
            console.error('Error saving user response:', error);
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (quizCompleted) {
        return <p>Quiz completed. Redirecting to result...</p>;
    }

    return (
        <div className="quiz-container">
            <h2>{type} Quiz</h2>
            <h3>Question {currentQuestionIndex + 1}</h3>
            {currentQuestion.image && (
                <img src={currentQuestion.image} alt="Question Image" style={{ maxWidth: '50%', marginBottom: '20px', marginTop: '10px' }} />
            )}
            <p>{currentQuestion.question}</p>
            <ul>
                {currentQuestion.options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                name="options"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionSelect(option)}
                            />
                            {String.fromCharCode(65 + index)}. {option}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleNextQuestion} disabled={!selectedOption}>
                {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
        </div>
    );
}

export default Quiz;


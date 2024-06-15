// models/UserResponse.js

const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    quizType: { type: String, required: true },
    responses: [{ 
        question: { type: String, required: true },
        userAnswer: { type: String, default: ''},
        correctAnswer: { type: String, required: true }
    }],
    score: { type: Number, required: true }
});


const UserResponseModel = mongoose.model('UserResponse', userResponseSchema);

module.exports = UserResponseModel;

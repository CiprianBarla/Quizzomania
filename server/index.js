const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const ParticipantModel = require('./models/participant');
const UserResponse = require('./models/UserResponse');
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(cors());

// Set up express session
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

mongoose.connect("mongodb://127.0.0.1:27017/Quizparticipant", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await ParticipantModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                req.session.username = email; // Store username in session upon successful login
                return res.json("Success");
            } else {
                return res.json("The password is incorrect");
            }
        } else {
            return res.json("No record Exist");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Internal Server Error");
    }
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const participant = await ParticipantModel.create({ username, email, password });
        res.json(participant);
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json("Internal Server Error");
    }
});

// Route to handle saving user responses
app.post('/user-response', async (req, res) => {
    const { username, quizType, responses } = req.body;

    try {
        let score = 0;

        // Calculate score based on correct answers
        for (const response of responses) {
            if (response.userAnswer === response.correctAnswer) {
                score++;
            }
        }

        const userResponse = await UserResponse.create({
            username,
            quizType,
            responses,
            score
        });

        console.log("User response saved:", userResponse);
        res.json(userResponse); // Send back the saved UserResponse document
    } catch (error) {
        console.error("Error saving user response:", error);
        res.status(500).json("Internal Server Error");
    }
});

// Route to fetch user response and score based on username and quiz type
app.get('/user-response/:username/:quizType', async (req, res) => {
    const { username, quizType } = req.params;

    try {
        const userResponse = await UserResponse.findOne({ username, quizType });
        if (userResponse) {
            res.json(userResponse);
        } else {
            res.json(null); // User response not found
        }
    } catch (error) {
        console.error("Error fetching user response:", error);
        res.status(500).json("Internal Server Error");
    }
});


app.listen(3001 ,() => {
    console.log("Server is running on port 3001");
});

const mongoose = require('mongoose')
const ParticipantSchema =new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const ParticipantModel = mongoose.model("participant",ParticipantSchema)
module.exports = ParticipantModel
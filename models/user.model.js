const db = require('../config/db.js');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchem = new Schema({
    email : {
        type: String,
        lowercase: true,
        required: [true, "Email can't be empty!"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Email format is not correct!"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});
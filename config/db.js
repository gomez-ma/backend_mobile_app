const mongoose = require('mongoose');

const connection = mongoose.createConnection(`xxx`).on('open',() => {
    console.log("MongoDB Connected");
}).on('error', () => {
    console.log("MongoDB Connection error!");
});

module.exports = connection;
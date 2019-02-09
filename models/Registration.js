const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    message: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Registration', registrationSchema);
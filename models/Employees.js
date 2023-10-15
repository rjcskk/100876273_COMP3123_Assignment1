const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    salary: { type: Number, required: true },
});

module.exports = mongoose.model("employee", employeeSchema);
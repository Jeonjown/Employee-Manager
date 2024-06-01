const mongoose = require('mongoose');

// Define the employee schema with validation
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String,
    // },
}, { timestamps: true });

// Create the Employee model from the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

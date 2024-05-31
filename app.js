// import 
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const employeeRouter = require('./routes/employeeRoutes');
const app = express();

// connect to database
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI)
    .then(result => console.log('connected to:', result.connection.name))
    .catch(err => console.log(err));

// set ejs as view engine
app.set('view engine', "ejs");

// setup express server 
app.listen(3000, () => {
    console.log('server is running..');
});

// add static file
app.use(express.static('public'));

// index
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('employees/add-employee');
});


app.use('/employees', employeeRouter);
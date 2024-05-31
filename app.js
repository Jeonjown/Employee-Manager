// import 
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

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


console.log('je;;;');
//import 
require('dotenv').config();
const mongoose = require('mongoose');

//connect to database
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
    .then(result => console.log('connected to:', result.connection.name))
    .catch(err => console.log(err));
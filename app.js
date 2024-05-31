//import dotENV dbURI
require('dotenv').config();
const dbURI = process.env.DB_URI;
console.log(dbURI);
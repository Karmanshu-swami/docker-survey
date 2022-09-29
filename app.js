const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
const dotenv = require('dotenv').config();
const frontendrouter = require('./router/frontend')

// Initialize DB
const initDB = require('./initDB');
initDB();

const PORT = process.env.PORT || 5000;


app.use(frontendrouter);


app.set("view engine", "ejs")



app.listen(PORT, ()=>{
    console.log("Listening to port 5000");
});
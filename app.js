const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
const frontendrouter = require('./router/frontend')
const mongoose = require('mongoose');

// mongoose.connect('mongodb://admin:Admin123@13.233.89.198:27017/?tls=false&authMechanism=DEFAULT/studentrec', ()=>{
//     console.log("Connected to database successfully!");
// });

mongoose.connect('mongodb://127.0.0.1:27017/studentrec' , ()=>{
    console.log("Connected to database successfully!!");
})

const Port = 5000;


app.use(frontendrouter);


app.set("view engine", "ejs")



app.listen(Port, ()=>{
    console.log("Listening to port 5000");
});
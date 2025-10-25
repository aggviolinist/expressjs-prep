const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const route = require('./route');
const app = express();

//mongoose.Promise = global.Promise

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb://admin:secret@localhost:27017/testDB?authSource=admin",{

})
.then(()=>console.log("Connected to DB"))
.catch(err=>console.error("Connection error",err));



app.use('/',route);

app.use('/kev',route);

app.listen(3002,
    console.log("the server running on port 3002")
);

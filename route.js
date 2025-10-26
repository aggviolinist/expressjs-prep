const express = require('express');
const router = express.Router();
const UserDB = require('./userModel'); 

router.get('/kman/x',(req,res)=>{
    res.send("Welcome to get method");
});

router.get('/',(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

router.get('/allusers',async(req,res)=>{
    try{
        const alluserz = await UserDB.find({});

        res.status(200).json(alluserz);
    }
    catch(error){
        console.err(error);
        res.status(500).send("Unable to retrieve the users")
    }
})

router.post('/adduser', async (req,res)=>{
    try{
    const data = new UserDB(req.body);
    await data.save();
    res.status(200).send('User saved to database');
    }
    catch(error){
        console.err(error);
        res.status(400).send("Unable to save user into he database");
    }
});

module.exports=router;
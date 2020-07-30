const express = require('express')
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const adminRoute = require('./Routes/admin')
const passport = require('passport')
const path = require('path')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../backend/models/Register')
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SCRET
let myStrategy = new JwtStrategy(opts, (payload, done)=> {
    let email = payload.email;
    let name = payload.name;
    User.find({'email':email})
        .then(user=>{
            if(user[0].name == name){
                done(null,user)
            }
        })
        .catch(err=>{
            done(err,null)
        })

})



app.use(bodyParser.json());//If for API,it is used.
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})
app.use('/admin',adminRoute)
app.use(express.static(path.join(__dirname,'./assets')))
passport.use(myStrategy)
mongoose.connect('mongodb+srv://naungnaung:PKs7mWuztwPHfRQ7@cluster0-qmjxz.mongodb.net/peryameshin')
    .then(connected =>{
        app.listen(process.env.PORT,()=>{
            console.log("server is running",process.env.PORT)
        })
    })
    .catch(err=>{
        console.log(err);
    })



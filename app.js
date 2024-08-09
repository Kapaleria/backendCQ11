const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')



//importing the routes
const routes = require('./routes')

const app = express(); //creating an express app

//MIDDLEWARE
app.use(bodyParser.json())
app.use('/api',routes)

// app.use(express.json())

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK)
.then(()=>{console.log('Connected to the DB')})
.catch(err=>{console.log('Error connecting to the DB', err)})


app.listen(process.env.PORT, ()=>{console.log(`Connected on port ${process.env.PORT}`)})

const express = require ('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express(); //creating an express app
// const port = 5000

app.get('/', (req, res) =>{
  res.send('We are the Code Queens')
})

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK,
  {useNewUrlParser:true}
  // parsing error
).then(
  ()=>{console.log('Connected to the DB')}

).catch(err=>{
      console.log('Error connecting to the DB', err)
})


app.listen(process.env.PORT, ()=>{console.log(`Connected on port ${process.env.PORT}`)})

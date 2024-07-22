const express = require ('express');

const app = express();
const port = 4000

app.get('/', (req, res) =>{
  res.send('We are the Code Queens')
})
app.listen(port)


// function student (req, res){
//console.log(req+res)
//}

// const students = (req, res)=>{ console.log (req+res)}

//(req,res)=>{ console.log(req+res)}
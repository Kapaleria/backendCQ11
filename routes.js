const express = require('express')

const router = express.Router()
const Posts = require('./schema')

            //CRUD
//get method (all posts)
router.get('/posts', (req,res)=>{
    // res.send('Posts page')

    res.json(
        {msg:'GET all posts'}
    )
})

router.get('/posts/:id', async(req,res)=>{
    res.json(
        {msg:'GET a specific post'}
    )
})

router.post('/posts', async(req,res)=>{
         const post = new Posts({
            postTitle :req.body.postTitle,
            postNumber :req.body.postNumber,
            postContent :req.body.postContent
         })
         try{
            const savedpost = await post.save()
            res.json(savedpost)
         }

         catch (err){
            res.json({msg:err})
         }
})

module.exports= router
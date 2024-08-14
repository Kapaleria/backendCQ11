const express = require('express')

const router = express.Router()
const Posts = require('./schema')

            //CRUD
//get method (all posts)
router.get('/posts', async(req,res)=>{
   try{
        const allPosts = await Posts.find();
        res.json(allPosts)
   }

   catch(err){
    res.json({mssg: err})
   }
})

router.get('/posts/:postID', async(req,res)=>{
    try{
        const onePost = await Posts.findById(req.params.postID)
    // params = parameters
    res.json(onePost)
    }

    catch(err){
        res.json({mssg:err})
    }
    


})
// sending data to the database
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

/**
 * router.%method%('%path%', async(req,res)=>{
 *         
 * try{}
 * catch{}
 * })
 */

module.exports= router
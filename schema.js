
// blueprint of the data

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },

    postNumber:{
        type:Number
    },

    postContent:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports= mongoose.model('posts', postSchema)
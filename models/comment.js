const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },

    //comment belongs to a user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //comment belongs to a post
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }]
},{
    timestamps:true
});

const Comment = mongoose.model('Comment' , commentSchema);
module.exports = Comment;
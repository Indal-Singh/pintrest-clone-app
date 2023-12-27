const mongoose = require('mongoose')
const { Schema } = mongoose;

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    redirecturl : {
        type: String
    },
    description:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    image:{
        type: String,
        required: true
    }
}, {timestamps:true})

const postsModel = mongoose.model('posts',postSchema)
module.exports = postsModel
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const { Schema } = mongoose; // Destructure Schema from mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    dp: {
        type: String
    }
}, { timestamps: true });

UserSchema.plugin(plm);
const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;

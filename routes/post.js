const express = require('express')
const { isLoggedIn } = require('../controllers/auth');
const {upload ,handelUplaodPost} = require('../controllers/uploadpost');
const handelMyPost = require('../controllers/post');
var router = express.Router();

router.post('/uploadpost',isLoggedIn,upload.single('imagefile'),handelUplaodPost)

router.get('/showpost/:id',isLoggedIn,handelMyPost)

module.exports = router;
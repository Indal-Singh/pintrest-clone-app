multer = require('multer');
const path = require('path');
const fs = require('fs');
const postsModel = require('../models/post');
const userModel = require('../models/auth');
// Specify the destination folder
const destinationFolder = './public/images/posts';

// Check if the folder exists, and create it if it doesn't
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destinationFolder)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

  const handelUplaodPost = async (req,res,next) => {
    if(!req.file)
    {
        return res.status(400).send('no file was given')
    }
    const user = await userModel.findOne({username: req.session.passport.user})
    const postdata = await postsModel.create({
      title:req.body.title,
      redirecturl:req.body.rediercturl,
      description:req.body.description,
      image: req.file.filename,
      user: user._id
    })
    user.posts.push(postdata._id)
    await user.save();
    res.redirect('/profile')
  }

  module.exports = {upload,handelUplaodPost}
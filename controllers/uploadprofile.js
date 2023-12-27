const multer = require('multer')
const path = require('path')
const fs = require('fs');
const userModel = require('../models/auth')

// Specify the destination folder
const destinationFolder = './public/images/profiles';

// Check if the folder exists, and create it if it doesn't
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destinationFolder)
    },
    filename: function (req, file, cb) {
      const profileImgName = req.session.passport.user+path.extname(file.originalname)
      cb(null, profileImgName)
    }
  })
  const uploadProfile = multer({ storage: storage })

  const handelUplaodProfile = async (req,res,next) => {
    if(!req.file)
    {
        return res.status(400).send('no file was given')
    }
    const user = await userModel.findOne({
      username: req.session.passport.user
    })
    user.dp = req.file.filename
    await user.save();
    res.redirect('/profile')
  }

  module.exports = { uploadProfile, handelUplaodProfile}
  
var express = require('express');
const { isLoggedIn } = require('../controllers/auth');
const { handelGetProfile } = require('../controllers/profile');
const {uploadProfile ,handelUplaodProfile} = require('../controllers/uploadprofile')
var router = express.Router();

/* GET users listing. */
router.get('/profile', isLoggedIn,handelGetProfile);

router.post('/uploadprofile',isLoggedIn,uploadProfile.single('profileimage'),handelUplaodProfile)

module.exports = router;

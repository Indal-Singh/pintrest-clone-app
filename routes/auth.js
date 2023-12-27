const express = require('express')
const router = express.Router()
const { handelRegister, verifyLogin, handelLogin, handelLogout, isLoggedIn} = require('../controllers/auth');
router.get('/login',(req,res) => {
    if(req.isAuthenticated())
    {
        res.redirect('/profile')
    }
    res.render('auth/login', {error: req.flash('error')} )
});
router.get('/register',(req,res) => {
    res.render('auth/register')
});
router.post('/register',handelRegister)
router.post('/login',verifyLogin,handelLogin)

router.get('/logout',handelLogout)

module.exports = router;
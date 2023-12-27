const passport = require('passport');
const userModel = require('../models/auth');
const localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()))

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

const handelRegister = (req, res) => {
    const { username , email , fullname } = req.body;
    const userData = new userModel({ username, email , fullname})
    userModel.register(userData , req.body.password).then(()=>{
        passport.authenticate("local")(req,res,() =>{
            res.redirect('/profile');
        })
    })
}

const verifyLogin = passport.authenticate('local',{
successRedirect : '/profile',
failureRedirect: '/login',
failureFlash: true
})

const handelLogin = (req,res) => {

}
const handelLogout = (req, res, next) => {
    req.logout((err) => {
        if (err) { 
            return next(err);
        }
        res.redirect('/');
    });
};

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

module.exports = { handelRegister, verifyLogin, handelLogin, handelLogout, isLoggedIn}
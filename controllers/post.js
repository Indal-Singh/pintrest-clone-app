const userModel = require('../models/auth');

const handelMyPost = async (req,res) => {
   try{
        if(!req.params.id)
        {
            return res.status(400).send('URL is NOT Correct.')
        }
        const userId = req.params.id;
        const isUserLoggedIn = req.isAuthenticated();
        let user = { isUserLoggedIn };
        const userData = await userModel.findById(userId).populate('posts')
        if(!user)
        {
            return res.status(400).send('User id Not Correct')
        }
        if (userData) {
            user = { ...user, ...userData.toObject() };
        }
        return res.render('showpost',{posts: user.posts,user: user})
   }
    catch (error) {
        console.error('Error in handleHomePage:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = handelMyPost
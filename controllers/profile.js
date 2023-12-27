const userModel = require('../models/auth')
const handelGetProfile = async (req,res) =>
{
    try {
        const isUserLoggedIn = req.isAuthenticated();
        let user = { isUserLoggedIn };

        if (isUserLoggedIn) {
            const userData = await userModel.findOne({
                username: req.session.passport.user
            }).populate({
                    path: 'posts',
                    options: { sort: { createdAt: -1 } }
                });
           
            if (userData) {
                user = { ...user, ...userData.toObject() };
            }
        }
        res.render('profile', { user });
    } catch (error) {
        console.error('Error in handleHomePage:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { handelGetProfile }
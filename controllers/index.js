const userModel = require("../models/auth");
const postsModel = require("../models/post");

const handleHomePage = async (req, res) => {
    try {
        const isUserLoggedIn = req.isAuthenticated();
        let user = { isUserLoggedIn };

        if (isUserLoggedIn) {
            const userData = await userModel.findOne({
                username: req.session.passport.user
            });

            if (userData) {
                user = { ...user, ...userData.toObject() };
            }
        }
        // getting all post from database
        const posts = await postsModel.find().populate('user');
        res.render('index', { user,posts });
    } catch (error) {
        console.error('Error in handleHomePage:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = handleHomePage
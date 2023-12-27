const mongoose = require('mongoose');
require('dotenv').config();

const handelDbConnect  = () =>
{
    return mongoose.connect(process.env.DATABASEURL);
}

module.exports = handelDbConnect;
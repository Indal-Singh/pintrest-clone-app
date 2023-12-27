var express = require('express');
const handelHomePage = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', handelHomePage);

module.exports = router;

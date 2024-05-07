var express = require('express');
var router = express.Router();


router.use('/home', require('./home'));
router.use('/contact', require('./contact'));
router.use('/about', require('./about'));
router.use('/service', require('./service'));
router.use('/',require('./home'));
module.exports = router;
const express = require('express');
const router = express.Router();

router.use('/contact',(req, res, next) => {
    req.app.set('layout', 'about');
});

router.get('/', (req, res) => {
    res.render('IntroApp/about');
});

module.exports = router;
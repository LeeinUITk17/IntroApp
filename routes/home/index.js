const express = require('express');
const router = express.Router();

router.use('/contact',(req, res, next) => {
    req.app.set('layout', 'home');
});

router.get('/', (req, res) => {
    res.render('IntroApp/home');
});

module.exports = router;
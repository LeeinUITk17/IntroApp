const express = require('express');
const router = express.Router();

router.use('/contact',(req, res, next) => {
    req.app.set('layout', 'contact');
});

router.get('/', (req, res) => {
    res.render('IntroApp/contact');
});

module.exports = router;
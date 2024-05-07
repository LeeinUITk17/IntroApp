const express = require('express');
const router = express.Router();

router.use('/contact',(req, res, next) => {
    req.app.set('layout', 'service');
});

router.get('/', (req, res) => {
    res.render('IntroApp/service');
});

module.exports = router;
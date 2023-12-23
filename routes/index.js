const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth');
const ShortUrl = require('../models/shorturl');

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    const urls = await ShortUrl.find();
    res.render('dash', { urls: urls });
});

router.post('/shorten', async (req, res) => {
    await ShortUrl.create({ original: req.body.fullUrl })
    res.redirect('/dashboard');
})  

module.exports = router;
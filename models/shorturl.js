const mongoose = require('mongoose');
const shortid = require('shortid');


const ShortUrlSchema = new mongoose.Schema({
    original: {
        type: String,
        require: true
    },
    short:{
        type: String,
        require: true,
        default: shortid.generate
    }
})

module.exports = mongoose.model('ShortUrl', ShortUrlSchema)
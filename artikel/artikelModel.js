var mongoose = require('mongoose');

var artikelSchema = mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    },
    image: String,
    creator: String,
    create_date: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now
    }
});

var Artikel = module.exports = mongoose.model('artikel', artikelSchema);
module.exports.get = function (callback, limit) {
    Artikel.find(callback).limit(limit);
}
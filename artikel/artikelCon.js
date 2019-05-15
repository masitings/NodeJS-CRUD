Artikel = require('./artikelModel.js');
exports.index = function (req, res) {
    Artikel.get(function (err, artikels) {
        if (err) {
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            status: 'success',
            message: 'List Artikel',
            data: artikels
        });
    });
}
exports.new = function (req, res) {
    var artikel = new Artikel();
    artikel.judul = req.body.judul ? req.body.judul : artikel.judul;
    artikel.image = req.body.image;
    artikel.isi = req.body.isi;
    artikel.creator = req.body.creator;
    artikel.save(function (err) {
        res.json({
            message: 'Oke added',
            data: artikel
        });
    });
}

exports.view = function (req, res) {
    Artikel.findById(req.params.artikel_id, function (err, artikel) {
        if (err) {
            res.send(err)
            res.json({
                message: 'artikel details',
                data: artikel
            });
        }
    })
}

exports.update = function (req, res) {
    Artikel.findById(req.params.artikel_id, function (err, artikel) {
        if (err) {
            res.send(err);
            artikel.judul = req.body.judul ? req.body.judul : artikel.judul;
            artikel.image = req.body.image;
            artikel.isi = req.body.isi;
            artikel.creator = req.body.creator;

            artikel.save(function (err) {
                if (err) {
                    res.json(err)
                    res.json({
                        message: 'artikel telah di update',
                        data: artikel
                    });
                }
            });
        }
    });
}

exports.delete = function (req, res) {
    Artikel.remove({
        _id: req.params.artikel_id
    }, function (err, artikel) {
        if (err) {
            res.send(err)
            res.json({
                status: 'success',
                message: 'artikel telah di hapus'
            });
        }
    });
}
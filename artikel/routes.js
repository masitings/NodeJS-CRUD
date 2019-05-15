let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 404,
    });
});

var artikelController = require('./artikelCon');
router.route('/artikel')
    .get(artikelController.index)
    .post(artikelController.new);

router.route('/artikel/:artikel_id')
    .get(artikelController.view)
    .patch(artikelController.update)
    .put(artikelController.update)
    .delete(artikelController.delete);

module.exports = router;
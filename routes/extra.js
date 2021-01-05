const extra = require('../Controller/extra')
var router = require('express-promise-router')();

router.route('/creatextra')
    .post(extra.addextra)
router.route('/allextra')
    .get(extra.viewextra)

module.exports = router
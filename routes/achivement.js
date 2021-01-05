const ac = require('../Controller/Achivement')
var router = require('express-promise-router')();

router.route('/createachvement')
    .post(ac.addAchivement)
router.route('/allachivemnet')
    .get(ac.allAchivement)

module.exports = router
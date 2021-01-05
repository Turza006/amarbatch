const ER = require('../Controller/ExamContoller')
var router = require('express-promise-router')();

router.route('/createexamresult')
    .post(ER.addER)
router.route('/allexamresult')
    .get(ER.allEr)


module.exports = router
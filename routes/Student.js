const Student = require('../Controller/StudentController')
var router = require('express-promise-router')();
const Sdata = require('../Controller/studentdataContrller')

router.route('/createstudent')
    .post(Student.createStudent)
router.route('/login')
    .post(Student.login)
router.route('/update')
    .post(Student.update)
router.route('/getall')
    .get(Student.allstudents)
router.route('/addstudentdata')
    .post(Sdata.adddata)
router.route('/allstudentdata')
    .get(Sdata.viewSection)

module.exports = router
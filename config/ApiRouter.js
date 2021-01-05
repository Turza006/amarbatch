var indexRouter = require('../routes/index');
var extra = require('../routes/extra');
var user = require('../routes/users');
var student = require('../routes/Student');
var exam = require('../routes/exam');
var ac = require('../routes');
module.exports = app => {

    app.use('/', indexRouter);
    app.use('/user',user);
    app.use('/student',student);
    app.use('/exam',exam);
    app.use('/achivement',ac);
    app.use('/extra',extra);

}

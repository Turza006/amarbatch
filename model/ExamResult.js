const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
const ExamResultSchema = new Schema({
    section: String,
    midResult: String,
    classtest: String
})

ExamResultSchema.plugin(timestamps);
ExamResultSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("ExamResult",ExamResultSchema);
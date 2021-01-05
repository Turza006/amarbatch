const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
const ExtraSchema = new Schema({
    ClassSchedule: String,
    examSchedule: String,
    OfferCourses: String,
    ClassNotice: String,
    AcademicNotice: String
})



ExtraSchema.plugin(timestamps);
ExtraSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Extra",ExtraSchema);
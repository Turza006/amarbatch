const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const StudentDataSchema = new Schema({
    section:String,
    pdflink:String,
    status:{
        type:String,
        default:'active'
    }


})
StudentDataSchema.plugin(timestamps);
StudentDataSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("StudentData",StudentDataSchema);
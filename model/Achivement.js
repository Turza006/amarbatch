const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
const AchivementSchema = new Schema({
    teamname: String,
    comptationName: String,
    achivementName: String,
    image: String
})

AchivementSchema.plugin(timestamps);
AchivementSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Achivement",AchivementSchema);
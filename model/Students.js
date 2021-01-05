const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');

const StudentSchema = new Schema({
    username:String,
    email:String,
    password:String,
    phone_Number: String,
    classId: String,
    location: String,
    Bio:String,
    Education: String,

})
StudentSchema.plugin(timestamps);

// generating a hash
StudentSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);
};

// checking if password is valid
StudentSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

StudentSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Student",StudentSchema);
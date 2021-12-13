const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    nationalId: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role:{type: mongoose.SchemaTypes.ObjectId, ref:"Role"}
})
server.post('/login');

module.exports.User = mongoose.model("User", userSchema);
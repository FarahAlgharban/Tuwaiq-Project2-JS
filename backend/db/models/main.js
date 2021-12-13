const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const mainSchema = new mongoose.Schema({
    nationalId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    role:{type: mongoose.SchemaTypes.ObjectId, ref:"Role"}
})

module.exports.Main = mongoose.model("Main", mainSchema);
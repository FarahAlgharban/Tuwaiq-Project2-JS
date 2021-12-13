const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const dashboardSchema = new mongoose.Schema({
    // nationalId: {type: String, required: true, unique: true},
    // name: {type: String, required: true},
    // role:{type: mongoose.SchemaTypes.ObjectId, ref:"Role"}
})

module.exports.Dashboard = mongoose.model("Dashboard", dashboardSchema);
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

module.exports = mongoose.model("employees", employeeSchema)
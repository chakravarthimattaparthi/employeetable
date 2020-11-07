const employeeModel = require("../models/employee.model");
var ObjectId = require('mongodb').ObjectId;

module.exports.addEmployee = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let empObject = {
        firstName,
        lastName
    }
    employeeModel.create(empObject, (err, data) => {
        if (err) {
            throw err
        } else {
            res.send(data);
        }

        res.end();
    })
}

module.exports.getEmployees = (req, res) => {
    employeeModel.find({}, (err, data) => {
        if (err) {
            throw err
        } else {
            res.send(data);
        }
        res.end();
    })
}

module.exports.updateEmployee = (req, res) => {
    let id = req.body.id;
    employeeModel.findOneAndUpdate({ "_id": ObjectId(id) }, req.body, (err, data) => {
        res.send(data);
    })
}

module.exports.deleteEmployee = (req, res) => {
    let id = req.query['empId'];;
    employeeModel.remove({ "_id": ObjectId(id) }, (err, data) => {
        res.send(data);
    })
}
const express = require("express");
const employeeRouter = express.Router();

const employeeController = require("../controller/employee.controller")
employeeRouter.post("/addEmployee", employeeController.addEmployee);
employeeRouter.get("/getEmployees", employeeController.getEmployees);
employeeRouter.post("/updateEmployee", employeeController.updateEmployee);
employeeRouter.get("/deleteEmployee", employeeController.deleteEmployee);

module.exports = employeeRouter;
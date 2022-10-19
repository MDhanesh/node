const express = require("express");
const router = express.Router();
const employeeModule = require("../modules/employeesmodule");

router.get("/get", employeeModule.getEmployees);

router.post("/create", employeeModule.createEmployees);

router.put("/update/:id", employeeModule.updateEmployees);

router.delete("/delete/:id", employeeModule.deleteEmployees);

module.exports = router;

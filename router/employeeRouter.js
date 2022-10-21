const express = require("express");
const router = express.Router();
const employeeModule = require("../modules/employeesmodule");

router.get("/get", employeeModule.getEmployees);

router.post("/create", employeeModule.createEmployees);

router.put("/update/:id", employeeModule.updateEmployees);

router.delete("/delete/:id", employeeModule.deleteEmployees);

module.exports = router;

// MONGODB_URL=mongodb+srv://XXX:FksMCyYcYMgkUkK9@project.66wonva.mongodb.net/?retryWrites=true&w=majority
// PORT=3001

// SECERT_KEY=ABCD

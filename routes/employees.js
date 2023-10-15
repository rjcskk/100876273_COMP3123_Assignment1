const express = require("express");
const router = express.Router();
const EmployeeModel = require('../models/Employees'); 

// Employee List
router.get("/employees", async (req, res) => {
    try {
        const employeeList = await EmployeeModel.find({});
        res.status(200).send(employeeList);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create Employee
router.post("/employees", async (req, res) => {
    try {
        const newEmployee = new EmployeeModel({ ...req.body });
        await newEmployee.save();
        res.status(201).send(newEmployee);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Employee
router.get("/employees/:eid", async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.eid);
        if (!employee) {
            res.status(404).send("Employee not found");
        } else {
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update Employee
router.put("/employees/:eid", async (req, res) => {
    try {
        res.status(200).send("Employee details updated.");
    } catch (error) {
        res.status(500).send(error);
    }
});


router.delete("/employees", async (req, res) => {
    try {
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
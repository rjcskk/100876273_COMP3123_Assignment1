const express = require("express");
const router = express.Router();
const UserModel = require('../models/Users');


router.post("/signup", async (req, res) => {
    try {

        res.status(201).send("New user created.");
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post("/login", async (req, res) => {
    try {
        res.status(200).send("User logged in successfully.");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
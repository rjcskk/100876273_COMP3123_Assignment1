const express = require("express");
const employeesRoutes = require("./routes/employees");
const usersRoutes = require("./routes/users");
const mongoose = require('mongoose');

const app = express();

const SERVER_PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_CONNECTION_STRING = "mongodb+srv://rjcsebkk:lFzJfReN146LgWb8@cluster0.6bv7pci.mongodb.net/comp3123?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api/v1/emp", employeesRoutes);

app.use("/api/v1/user", usersRoutes);

app.get("/", (req, res) => {
    res.send("<h1>MongoDB + Mongoose Example</h1>");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
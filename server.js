const express = require("express")
const app = express()
const bodyPaser = require("body-parser")
const mongoose = require("mongoose")

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ "extended": true }));


// For cross domine issue
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept ,Cache-Control , Authorization , sid");
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
    } else {
        return next();
    }
});


// For Data base connection
mongoose.connect("mongodb+srv://employee:Test123@cluster0.0sww4.mongodb.net/employee?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.connection;

let employeeRouter = require("./api/route/employee.router");

app.use("/employee", employeeRouter);

app.listen("3030", () => {
    console.log("Server Is running at 3030");
})
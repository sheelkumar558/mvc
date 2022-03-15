const express = require("express");

const userCon = require("./controllers/userCon");
const studentCon = require("./controllers/studentCon");
const batchCon = require("./controllers/batchCon");
const evaluationCon = require("./controllers/evaluationCon");

const app = express();

app.use(express.json());

app.use("/users", userCon); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/student", studentCon);
app.use("/batch",batchCon);
app.use("/evaluation",evaluationCon);

module.exports = app;
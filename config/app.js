require("dotenv").config();
const express = require('express');
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.set("port", process.env.PORT);

module.exports = app;

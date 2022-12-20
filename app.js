const express = require("express");
const app = express();
require("./db/dbConnection");
const allRoutes = require("./routes/index.js");
const errorHandlingMiddleware = require("./middlewares/error-middleware.js");
//require('dotenv').config({ path: './.env' })

const http = require("http");
const fs = require("fs");

app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: true })); // encoded parser

app.use("/api", allRoutes);


//* middleware burada en son kısma yazıyoruz
app.use(errorHandlingMiddleware);

//const port = process.env.PORT
app.listen(3000);

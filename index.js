const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");


const common = require("./src/common/common.router");



const app = express();
app.use(bodyParser.json());
var cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.port || 4000;

app.listen(port, () => {
  console.log("Hello Server!");
  console.log(`Server Running at  ${port}`);
});


app.use("/common", common);

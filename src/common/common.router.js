const express = require("express");
const router = express.Router();
const {
  getVacancies
} = require("./common.controller");


router.post("/vacancies", getVacancies);



module.exports = router;

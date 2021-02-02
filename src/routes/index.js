const express = require("express");
const celebrate = require("celebrate");
const saveController = require("../controllers/index");
const validations = require("../helpers/validations");

const router = express.Router();

router.post(
  "/api/v1/add-property",
  celebrate.celebrate(validations.createProperty),
  saveController.addProperty
);

module.exports = router;

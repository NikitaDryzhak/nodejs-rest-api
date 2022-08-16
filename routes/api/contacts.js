const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const {validationBody} = require('../../middlewares')
const schemas = require('../../schemas/contacts')

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", validationBody(schemas.add), ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.deleteContact));

router.put("/:id", validationBody(schemas.add), ctrlWrapper(ctrl.changeContact));

module.exports = router;

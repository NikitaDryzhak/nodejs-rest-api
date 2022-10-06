const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const {validationBody, isValidId} = require('../../middlewares')
const {schemas} = require('../../models/contact')

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id",  isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validationBody(schemas.contactsAddSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.deleteContact));

router.patch(':id/favorite', isValidId, validationBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.put("/:id", isValidId, validationBody(schemas.contactsAddSchema), ctrlWrapper(ctrl.changeContact));

module.exports = router;
 
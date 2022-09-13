const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const {
  authenticate,
  validationBody,
  isValidId,
} = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validationBody(schemas.contactsAddSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:id", isValidId, ctrlWrapper(ctrl.deleteContact));

router.patch(
  ":id/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.put(
  "/:id",
  isValidId,
  validationBody(schemas.contactsAddSchema),
  ctrlWrapper(ctrl.changeContact)
);

module.exports = router;

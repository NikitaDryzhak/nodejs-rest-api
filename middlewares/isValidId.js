const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers");

const isValidId = (req, _, next) => {
  const { id } = req.params;
  const result = isValidObjectId(id);
  if (!result) {
    const error = RequestError(400, "Invalid id");
    next(error);
  }
  next();
};

module.exports = isValidId;
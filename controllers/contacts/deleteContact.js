const { RequestError } = require("../../helpers");
const {Contact} = require('../../models/contact')

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;

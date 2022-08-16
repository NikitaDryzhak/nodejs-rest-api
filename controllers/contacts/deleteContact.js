const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;

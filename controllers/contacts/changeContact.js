const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const changeContact = async (req, res) => {
 
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.json(result);
};
module.exports = changeContact;
 
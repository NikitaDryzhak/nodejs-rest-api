const { RequestError } = require("../../helpers");

const {Contact} = require('../../models/contact')

const changeContact = async (req, res) => {
 
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.json(result);
};
module.exports = changeContact;

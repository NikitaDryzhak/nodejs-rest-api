const getAll = require("./getAll");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const deleteContact = require("./deleteContact");
const changeContact = require("./changeContact");
const updateFavorite = require('./changeFavorite')

module.exports = {
  getAll,
  getContactById,
  addContact,
  deleteContact,
  changeContact,
  updateFavorite
};

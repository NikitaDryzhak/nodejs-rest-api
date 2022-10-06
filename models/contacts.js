const fs = require("fs").promises;
const contactsPath = "./models/contacts.json";

async function listContacts() {
  const file = await fs.readFile(contactsPath);
  return JSON.parse(file);
}

async function updateContact(id, { name, games, wins, loses, goalsScored, goalsMissed, goalsPerGame, photo }) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id, name, games, wins, loses, goalsScored, goalsMissed, goalsPerGame, photo };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return allContacts[index];
}

module.exports = {
  listContacts, 
  updateContact, 
};

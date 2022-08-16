const fs = require("fs").promises;
const { nanoid } = require("nanoid");
const contactsPath = "./models/contacts.json";

async function listContacts() {
  const file = await fs.readFile(contactsPath);
  return JSON.parse(file);
}

async function getContactById(id) {
  const allContacts = await listContacts();
  const result = allContacts.find((contact) => {
    return contact.id == id;
  });
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(id) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return result;
}

async function addContact({ name, email, phone }) {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(2), name, email, phone };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return newContact;
}

async function updateContact(id, { name, email, phone }) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return allContacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

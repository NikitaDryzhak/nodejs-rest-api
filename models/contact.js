const {Schema, model} = require('mongoose');

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String,
})

const Contact = model('contact', contactSchema);

module.exports = Contact;


// name: {
//     type: String,
//     required: [true, 'Set name for contact'],
//   },
//   email: {
//     type: String,
//   },
//   phone: {
//     type: String,
//   },
//   favorite: {
//     type: Boolean,
//     default: false,
//   },

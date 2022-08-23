const {Schema, model} = require('mongoose');
const Joi = require('joi')

const contactSchema = Schema({
name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, {versionKey: false})

const contactsAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool(),
  });
  

  const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required(),
  })

  const schemas = {
    contactsAddSchema,
    updateFavoriteSchema

  }

  

const Contact = model('contact', contactSchema);

module.exports = {Contact,
    schemas
};



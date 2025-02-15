const mongoose = require("mongoose");
const contactUs = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 20,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscribe: {
    type: Boolean,
    default: false,
  },
});
const Contact = mongoose.model("ContactUs", contactUs);

module.exports = Contact;

const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
    minlength: 5,
  },
});

module.exports = mongoose.model("Contact", formSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    folowers: { type: String, required: false },
    profilePhoto: { type: String, required: false },

});


  
  // Export model
  module.exports = mongoose.model("User", User);
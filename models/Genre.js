const mongoose = require('express');
const Schema = mongoose.Schema();

// Create the Genre model
const GenreSchema = new Schema({
  name: { type: Sting, max: 100, required: true },
});

GenreSchema.virtual('url').get(function() {
  return '/genres/' + this._id; 
});

module.exports = mongoose.model('Genre', GenreSchema);

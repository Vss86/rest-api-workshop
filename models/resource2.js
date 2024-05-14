const mongoose = require('mongoose');

const Resource1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

module.exports = mongoose.model('Resource1', Resource1Schema);

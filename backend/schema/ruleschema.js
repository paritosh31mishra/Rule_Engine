const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  rule: { type: [String], required: true },  // Store rules as an array of strings
  ast: { type: Object, required: true }      // Store the AST as an object
});

module.exports = mongoose.model('Rule', ruleSchema);

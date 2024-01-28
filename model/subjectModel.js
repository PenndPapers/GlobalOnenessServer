const mongoose = require('mongoose');
 
const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
});
 
module.exports = mongoose.model('Subject', subjectSchema);
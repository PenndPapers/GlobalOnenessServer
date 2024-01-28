const mongoose = require('mongoose');
 
const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    section: { type: String, required: true },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' } // Reference to the class teacher
});
 
module.exports = mongoose.model('Class', classSchema);
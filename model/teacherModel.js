const mongoose = require('mongoose');
 
const teacherSchema = new mongoose.Schema({
    facultyId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String },
    photo: { type: String }
});
 
module.exports = mongoose.model('Teacher', teacherSchema);
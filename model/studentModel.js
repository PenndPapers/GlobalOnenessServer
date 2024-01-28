const mongoose = require('mongoose');
 
const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    parentPhoneNumber: { type: String, required: true },
    address: { type: String },
    bloodGroup: { type: String },
    gender: { type: String },
    height: { type: Number },
    weight: { type: Number },
    photo: { type: String }
});
 
module.exports = mongoose.model('Student', studentSchema);
const mongoose = require('mongoose');
 
const instituteAdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true }
    // You can add more fields as needed
});
 
module.exports = mongoose.model('InstituteAdmin', instituteAdminSchema);
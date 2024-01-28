// models/User.js
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Superadmin', 'InstituteAdmin', 'Faculty'],
        required: true
    },
    institute: {
        type: Schema.Types.ObjectId,
        ref: 'Institute'
    }
});
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;
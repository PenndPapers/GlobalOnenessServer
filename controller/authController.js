const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
 
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
    }
};
 
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password );
        // const user = await User.findOne({ username });
        // if (!user) {
        //     return res.status(404).json({ success: false, message: 'User not found' });
        // }
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) {
        //     return res.status(401).json({ success: false, message: 'Invalid credentials' });
        // }
        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        // res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Login failed', error: error.message });
    }
};
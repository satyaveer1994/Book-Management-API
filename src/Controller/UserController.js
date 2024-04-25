
const User = require('../Model/UserModel');
const jwt = require('jsonwebtoken');
// user signup
const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json({ user: user._id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//  user login
// Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, '1234567890', { expiresIn: '1h' });
};

// Function to handle user login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If user is not found, return error
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify the password
        const isPasswordValid = await user.comparePassword(password);

        // If password is invalid, return error
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token for the logged-in user
        const token = generateToken(user._id);

        // Respond with user ID and token
        res.status(200).json({ user: user._id, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    signup,
    login
};



const jwt = require('jsonwebtoken');
const User = require('../Model/UserModel');

//  handle user authentication
const requireAuth = async (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, '1234567890', async (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                const user = await User.findById(decodedToken.id);
                if (!user) {
                    res.status(401).json({ error: 'Unauthorized' });
                } else {
                    next();
                }
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { requireAuth };

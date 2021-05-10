const jwt = require('jsonwebtoken');
const secret =  require('../config/secrets');

module.exports = {
    generateToken: function (user) {
        const payload = {
            subject: user.id
        };
        const options = {
            expiresIn: '366d'
        };
        return jwt.sign(payload, secret.jwtSecret, options)
    }
}
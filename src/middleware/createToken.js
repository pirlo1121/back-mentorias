import jwt from 'jsonwebtoken';
const secret = process.env.secret

function generateToken(payload){
    return jwt.sign(payload, secret, {expiresIn: '1h'})
}

export {generateToken}
import  jwt  from 'jsonwebtoken';

const secret = process.env.SECRET

function validateToken(req, res, next){
    const authToken = req.headers['authorization'];
    const token = authToken && authToken.split(' ')[1];

    if(!token) return res.status(401).json({ok: false, msg: 'el token no está'})

    jwt.verify(token, secret, (err, data)=>{
        if(err) return res.status(401).json({ok:false, msg: 'el token no está'})

        console.log(data)
        next()
    })

}

// module.exports = validateToken;
export default validateToken
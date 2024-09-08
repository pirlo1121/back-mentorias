import { generateToken } from "../middleware/createToken.js";
import Usuario from "../models/user.models.js";

const getUsers = async (req, res)=>{ 
    try{
        const users = await Usuario.find();
        res.status(200).json({ok: true, users})
    } catch(error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los usuarios'
        })
    }
}

const createUser = async (req, res)=>{
    const data = req.body;
    if(!data) res.json({ok:false, msg: 'error al crear usuario'})
    const newUser = new Usuario({
        nombre: data.nombre,
        email: data.email,
        password: data.password
    })
    try {
        const user = await newUser.save()
        res.status(200).json({ok: true, user})

    } catch (error) {
        console.error('Error al crear usuario:', error);
      }
}
const login = async (req, res)=>{
    try {
        const {email, password} = req.body
        const userFound = await Usuario.findOne({email})
    
        if( !userFound ) return res.status( 400 ).json({ok: false, msg: 'el usuario no existe'})
    
        const userData = userFound.toObject();
        delete userData.password;
    
        // console.log(`delete pass: ${userData}`)
        const payload = {...userData}
    
        const token = generateToken(payload)
        // console.log(token)
    
        res.status(200).json({ok: true, token})
    } catch (error) {
        console.error(erro)
        res.status(500).json({ok: false, msg: 'Error'})
    }

}

export {getUsers, createUser, login}
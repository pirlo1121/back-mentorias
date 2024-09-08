import { Router } from "express";
import { createUser, getUsers, login } from "../controllers/user.controller.js";

const router = Router();

function usurios(){
    
    router.get('/users', getUsers)
    router.post('/users', createUser)
    router.post('/login', login)

    return router

}

export default usurios
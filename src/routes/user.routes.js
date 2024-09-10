import { Router } from "express";
import { createUser, getUsers, login } from "../controllers/user.controller.js";
import validateToken from '../middleware/validateToken.js'

const router = Router();

router.get('/users', validateToken ,getUsers)
router.post('/users', createUser)
router.post('/login', login)

export default router
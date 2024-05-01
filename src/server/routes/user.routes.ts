import { Router } from "express";
import { body, param } from "express-validator";
import { UserController } from "../controllers/user.controller.js";

export const UserRouter = Router();

UserRouter.post(
    '/register',
    body('username').exists(),
    body('password').exists(),
    UserController.register
)

UserRouter.post(
    '/login',
    body('username').exists(),
    body('password').exists(),
    UserController.login
)

UserRouter.patch(
    '/update/:user_id',
    body('username').exists(),
    body('password').exists(),
    param('user_id').exists(),
    UserController.update
)
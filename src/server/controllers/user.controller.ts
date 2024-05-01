import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

export const UserController = {
    login: async (req: Request, res: Response) => {
        const { username, password } = req.body
        try {
            const id = await UserService.loginUser({username, password})
            res.status(200).json({
                message: "Logged in successfully",
                user_id: id
            })
        } catch (error) {
            res.status(500).send("Error Logging In")
        }
    },
    register: async (req: Request, res: Response) => {
        const { username, password } = req.body
        try {
            const user_id = await UserService.registerUser({username, password})
            res.status(200).json({
                message: "Registered Successfully",
                user_id: user_id
            })
        } catch (error) {
            res.status(500).send("Error Logging In")
        }
    },
    update: async (req: Request, res: Response) => {
        const { username, password } = req.body
        const { user_id } = req.params
        try {
            await UserService.updateUser({username, password, user_id})
            res.status(200).json({
                message: "Edited Details Sccessfully",
            })
        } catch (error) {
            res.status(500).send("Error Logging In")
        }
    },
}
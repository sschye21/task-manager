import pool from "../config/db.js";
import { SQL_STATEMENTS } from "../models/sql-statements.js";
import { UserLoginArgs } from "../utils/types.js";

export const UserService = {
    loginUser: async ({username, password}: UserLoginArgs) => {
        const response = await pool.query(
            SQL_STATEMENTS.login,
            [username, password]
        )

    },
    registerUser: async ({username, password}: UserLoginArgs) => {
        await pool.query(
            SQL_STATEMENTS.register,
            [username, password]
        )
    },
    updateUser: async ({username, password, user_id}: UserLoginArgs & {user_id: string}) => {
        await pool.query(
            SQL_STATEMENTS.updateUser,
            [username, password, user_id]
        )
    }
}
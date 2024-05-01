import pool from "../config/db.js";
import { SQL_STATEMENTS } from "../models/sql-statements.js";
import { NewTaskArgs } from "../utils/types.js";

export const TaskService = {
    createTask: async ({name, description, dueDate, priority}: NewTaskArgs) => {
        await pool.query(
            SQL_STATEMENTS.insertTask,
            [name, description, dueDate, new Date(), priority]
        );
    },
    getAllTasks: async () => {
        return await pool.query(
            SQL_STATEMENTS.selectAllTasks,);
    },
    getTasksBySearch: async (search: any) => {
        return await pool.query(
			SQL_STATEMENTS.searchTasks,
			[search]);
    },
    updateTask: async ({name, description, dueDate, priority, id}: NewTaskArgs & {id: string}) => {
        await pool.query(
			SQL_STATEMENTS.updateTask,
			[name, description, dueDate, priority, id]
		);
    }
}
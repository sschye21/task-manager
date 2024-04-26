import pool from "../config/db.js";
import { SQL_STATEMENTS } from "../data-layer/sql-statements.js";
import { NewTaskArgs } from "../utils/types.js";

export const TaskService = {
    createTask: async ({name, description, dueDate, priority}: NewTaskArgs) => {
        const result = await pool.query(
            SQL_STATEMENTS.insertTask,
            [name, description, dueDate, new Date(), priority]
        );
        console.log(result);
    },
    getAllTasks: async () => {
        return await pool.query(
            SQL_STATEMENTS.selectAllTasks,);
    },
    getTasksBySearch: async (search: any) => {
        const result = await pool.query(
			SQL_STATEMENTS.searchTasks,
			[search]);
        console.log(result)
        return result
    },
    updateTask: async ({name, description, dueDate, priority, id}: NewTaskArgs & {id: string}) => {
        await pool.query(
			SQL_STATEMENTS.updateTask,
			[name, description, dueDate, priority, id]
		);
    }
}
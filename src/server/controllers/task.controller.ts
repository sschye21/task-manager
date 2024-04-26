import { Request, Response } from "express";
import { TaskService } from "../services/task.service.js";

export const TaskController = {
    newTask: async (req: Request, res: Response) => {
        const { name, description, dueDate, priority } = req.body;

        try {
            await TaskService.createTask({name, description, dueDate, priority});
            res.status(201).json({
                message: "Task created successfully",
                task: {
                    name,
                    dueDate
                }
            })
        } catch (error) {
            res.status(500).send("Error creating task"); 
        }
    },
    getTasks: async (req: Request, res: Response) => {
        const { search } = req.query;
        try {
            if (search) {
                const result = await TaskService.getTasksBySearch(search);
                res.status(200).json(result.rows);
                return
            }
            else {
                const result = await TaskService.getAllTasks();
                res.status(200).json(result.rows);
            }
        } catch (error) {
            res.status(500).send("Error fetching tasks");
        }
    },
    editTasks: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, description, dueDate, priority } = req.body;
        
        try {
            await TaskService.updateTask({name, description, dueDate, priority, id});
            res.status(200).json({
                message: "Task updated successfully",
                task: {
                    name,
                    dueDate
                }
            })
        } catch (error) {
            res.status(500).send("Error updating task");
        }
    }

}
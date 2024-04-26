import { Router } from "express";
import { TaskController } from "../controllers/task.controller.js";
import { body, query } from 'express-validator';

export const TaskRouter = Router();

TaskRouter.post(
    '/new',
    body('name').exists().isLength({min: 3, max: 40}).withMessage('Name must be between 3 and 40 characters'),
    body('description').exists().isLength({min: 3, max: 225}).withMessage('Description must be between 3 and 225 characters'),
    body('dueDate').exists(),
    body('priority').exists(),
    TaskController.newTask
)

TaskRouter.get(
    '/tasks',
    query('search').optional(),
    TaskController.getTasks
)

TaskRouter.patch(
    '/tasks/:id',
    body('name').exists().isLength({min: 3, max: 40}).withMessage('Name must be between 3 and 40 characters'),
    body('description').exists().isLength({min: 3, max: 225}).withMessage('Description must be between 3 and 225 characters'),
    body('dueDate').exists(),
    body('priority').exists(),
    TaskController.editTasks
)
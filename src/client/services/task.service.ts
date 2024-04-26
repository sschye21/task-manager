import { EditTaskArgs, TaskCreateArgs } from "../types/types.js";
import { axiosWrapper } from "./axios.wrapper.js";

export const taskCreation = async ({name, description, dueDate, priority}: TaskCreateArgs) => {
    return axiosWrapper('post', "/new/v1", { name, description, dueDate, priority })
}

export const getAllTasks = async (name: string, limit: number) => {
    return axiosWrapper("get", `/tasks/v1/${name}/${limit}`)
}

export const editTask = async ({name, description, dueDate, priority, id}: EditTaskArgs) => {
    return axiosWrapper('patch', `tasks/v1/${id}`, { name, description, dueDate, priority })
}

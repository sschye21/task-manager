import { EditTaskArgs, TaskCreateArgs } from "../types/types.js";
import { BASE_URL } from "../utils/constants.js";
import { ROUTES } from "../utils/routes.js";
import { axiosWrapper } from "./axios.wrapper.js";

export const taskCreation = ({name, description, dueDate, priority}: TaskCreateArgs) => {
    return axiosWrapper('post', `${BASE_URL}${ROUTES.new}`, { name, description, dueDate, priority })
}

export const getAllTasks = (search: string) => {
    if (search) return axiosWrapper("get", `${BASE_URL}${ROUTES.tasks}?search=${search}`)
    return axiosWrapper("get", `${BASE_URL}${ROUTES.tasks}`)
}

export const editTask = ({name, description, dueDate, priority, id}: EditTaskArgs) => {
    return axiosWrapper('patch', `${BASE_URL}${ROUTES.edit}/${id}`, { name, description, dueDate, priority })
}
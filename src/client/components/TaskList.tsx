import { useEffect, useState } from "react";
import { editTask, getAllTasks } from "../services/task.service.js";
import Modal from "./Modal.js";
import Search from "./Search.js";

const TaskList = () => {

    const [tasks, setTasks] = useState([{name: 'Testing Migrations', description: 'Down', dueDate: '2024-09-19', priority: 'Due Soon', id: "1"}])
    const [limit, setLimit] = useState(10)
    const [open, setOpenModal] = useState(false)
    const [searchName, setSearchName] = useState('')

    const [editName, setEditName] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editDueDate, setEditDueDate] = useState('')
    const [editPriority, setEditPriority] = useState('')

    // useEffect(() => {
    //     getAllTasks(searchName, limit)
    //     .then(response => {
    //         console.log(response)
    //         // setTasks(response?.data)
    //     })
    // }, [searchName, limit])

    useEffect(() => {
        setEditName(tasks[0].name)
        setEditDescription(tasks[0].description)
        setEditDueDate(tasks[0].dueDate)
        setEditPriority(tasks[0].priority)
    }, [])

    const openEditModal = () => {
        setOpenModal(true)
    }

    const confirmChanges = (id: string) => {
        editTask(
            {name: editName, 
            description: editDescription, 
            dueDate: editDueDate, 
            priority: editPriority,
            id: id
        })
        .then(response => {
            console.log(response?.data)
        })
    }

    return (
        <>
            <Search 
                setSearchName={setSearchName}
            />
            {tasks.map((task: any) => {
                return (
                    <div key={task.id} className="border p-4 my-4 bg-gray-200 border-solid rounded-md">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-xl font-bold">{task.name}</h2>
                            <p>{task.dueDate}</p>
                        </div>
                        <div className="py-4">
                            <p className="w-9/12">{task.description}</p>
                        </div>
                        <div className="flex flex-row justify-between items-end">
                            <p className={task.priority == "Due Soon" ? "text-orange-500" : task.priority == "Overdue" ? "text-red-500" : 'text-black'}>
                                {task.priority}
                            </p>
                            <button className="bg-blue-300 rounded-md p-2 px-4" onClick={openEditModal}>Edit</button>
                        </div>
                        {open &&
                            <Modal 
                                open={open}
                                setOpen={setOpenModal}
                                name={editName}
                                setName={setEditName}
                                description={editDescription}
                                setDescription={setEditDescription}
                                dueDate={editDueDate}
                                setDueDate={setEditDueDate}
                                priority={editPriority}
                                setPriority={setEditPriority}
                                confirmButton={confirmChanges(task.id)}
                                edit={true}
                            />
                        }
                    </div>
                )
            })}
        </>
    )
}

export default TaskList;
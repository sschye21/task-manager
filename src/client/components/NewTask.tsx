import { useState } from 'react';
import { taskCreation } from '../services/task.service';
import Modal from './Modal';

const NewTask = () => {

    const [open, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    const openModal = () => setOpenModal(true);

    console.log(dueDate)

    const createNewTask = () => {
        taskCreation({name, description, dueDate, priority})
        .then(response => {
            console.log(response?.data)
        })
    }

    return (
        <>
            <button
                className="bg-green-400 rounded-md p-4"
                type="button"
                onClick={openModal}
            >
                New Task
            </button>
            {open &&
                <Modal 
                    open={open}
                    setOpen={setOpenModal}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    priority={priority}
                    setPriority={setPriority}
                    confirmButton={createNewTask}
                    edit={false}
                />
            }
        </>
    );
}

export default NewTask;
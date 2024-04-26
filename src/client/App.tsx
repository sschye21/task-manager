import { useEffect, useState } from 'react';
import './index.css'
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className='p-16'>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <NewTask />
      </div>
      <TaskList />
    </div>

  )
};

export { App };

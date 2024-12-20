import React, { useState } from 'react'
import NewTaskAdd from './NewTaskAdd';

const Task = ({onAddTask , taskList , onDeleteTask}) => {
    const [taskText, setTastText] = useState('')
    const handleSubmitTask =()=> {
        if(taskText === ''){
            return
        }

        setTastText ('')
        onAddTask(taskText)
    }

  return (

    <div className='w-full flex flex-col mt-4'>
        <div className='w-full flex gap-8 mb-4'>
            <input className='w-2/3 rounded-md' type="text" placeholder='Enter task name here' value={taskText} onChange={(e) => setTastText(e.target.value)}/>
            <button className='p-2 bg-slate-600 text-slate-100 rounded-md' onClick={handleSubmitTask}>Add Task</button>
        </div>
        <h2 className='text-3xl mt-3'>Task List</h2>
        <NewTaskAdd taskList={taskList} onDeleteTask={onDeleteTask}/> 
    </div>
  )
}

export default Task
import React from 'react'

const NewTaskAdd = ({taskList , onDeleteTask}) => {
  return (
    <div className='w-full mt-3'>
        {
            taskList.map((task) => <li className='list-none flex gap-8 relative pb-3 pl-2 pr-7 mb-2 bg-red-300' key={task.id}>
                 <h2 className='text-xl'>{task.taskName}</h2>
                 <button className='absolute right-0 hover:text-slate-50  text-xl p-1 pr-3 rounded' onClick={() => onDeleteTask(task.id)} >clear</button>
            </li>)
        }
       
    </div>
  )
}

export default NewTaskAdd
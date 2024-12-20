import React from 'react'
import Button from './Button';
import Task from './Task';

const SelectedProject = ({project ,deleteProject, onAddTask, taskList ,onDeleteTask}) => {
  const fomatedDate= new Date(project=== undefined ? "" :project.date).toLocaleDateString('en-US',{
    year : 'numeric',
    month : 'short',
    day : "numeric"
  })
  const classListBtn1 = " w-48"
  return (
    <div className='w-[35rem] p-6 mt-10 bg-slate-200 relative'>
        <div className='w-[40rem] mb-6 flex gap-14'>
            <h1 className='text-4xl mt-4 text-rose-600'>{project.title}</h1>
            <div className='absolute align-text-bottom right-0'> 
          <Button classListBtn ={classListBtn1} onClick={() => deleteProject(project.id)}>Delete Project</Button>
      
        </div>
            
            {/* <button>Delete</button> */}
        </div>
        <div className='w-full bg-slate-100'>
          <p className='p-4'>{fomatedDate}</p>
          <p className='p-4'>{project.description}</p>

        </div>
        <div className='w-full mt-4 p-2  flex items-center bg-pink-200 overflow-hidden'>
          <Task onAddTask={onAddTask} taskList={taskList} onDeleteTask={onDeleteTask}/>

        </div>
    </div>
  )
}

export default SelectedProject
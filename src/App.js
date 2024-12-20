import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import ProjectAddDetails from './component/ProjectAddDetails';
import NoProjectSelected from './component/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './component/SelectedProject';
import { clear } from '@testing-library/user-event/dist/clear';
import Page from './component/ContextAPI/Page';
import ColorContextProvider1 from './component/ContextAPI/ColorContextProvider1';
import APICall from './component/apiCall/APICall';
import Contact from './component/router/Contact';
import { Link, Outlet } from 'react-router-dom';
import Header from './component/router/Header';

function App() {
  const [formShow, setFormShow] = useState({
    selectedProjectId : "no form",
    projects : [],
    projectSelectedId : 0,
    selectedProject :[],
    taskList : []
  })
  function formShowhide() {
    setFormShow(prevState =>{
      return {
         ...prevState,
        selectedProjectId : "show form"

      }
    })
  }

  function selectedProject(id) {
    setFormShow(preSate =>{
      return {
        ...preSate,
        projectSelectedId : 0,
        selectedProject :[],
        projectSelectedId : id,
        selectedProject : [formShow.projects.find(project => id === project.id)]
      }
    })
  }

  function handleCancelProject() {
    setFormShow(prevState =>{
      return {
         ...prevState,
        selectedProjectId : "no form"

      }
    })
  }

  function deleteProject(id) {
    setFormShow(preSate =>{
      return {
        ...preSate,
        selectedProject :[], 
        projects : preSate.projects.filter((project) => project.id !== preSate.projectSelectedId),
        projectSelectedId : "no form",
      }
    })
  }

  function handleAddProjects(projectData) {
    setFormShow(prevState =>{
      const newproject = {
        ...projectData,
        id : Math.random()
      }
      return {
         ...prevState,
         selectedProjectId : "no form",
        projects : [...formShow.projects,newproject]

      }
    })
  }

  function handleAddTask(newTask) {
    setFormShow(prevState =>{
      const newTaskData = {
        taskName : newTask,
        id : Math.random()
      }
      return {
         ...prevState,
         taskList : [...formShow.taskList,newTaskData]

      }
    })
  }

  function handleDeleteTask(id) {
    setFormShow(preSate =>{
      return {
        ...preSate,
        taskList : preSate.taskList.filter((task) => task.id !== id),
        projectSelectedId : "no form",
      }
    })
  }
  let content;
  if(formShow.selectedProject.length > 0){
    content = <SelectedProject project ={formShow.selectedProject[0]} deleteProject={deleteProject} onAddTask={handleAddTask} taskList={formShow.taskList} onDeleteTask={handleDeleteTask}/>
  }else{
    formShow.selectedProjectId == "show form" ? content  =<ProjectAddDetails onAdd={handleAddProjects} onCancel={handleCancelProject}/> : content =<NoProjectSelected formShowhide={formShowhide}/>
  }


  const [normalGunCount , setNormalGunCount] = useState(0)
  const [debounseGunCount , setdebounseGunCount] = useState(0)
  const [storeDebounseCount , setstoreDebounseCount] = useState(0)

function noramlGun() {

  setNormalGunCount(prev => prev +1 )
}


function deBounsced(fun , delay) {

  var timer;

  return (...arg) =>{

    clearTimeout(timer);
    timer = setTimeout(() =>{
      fun(...arg)
    }, delay)
  }
  
}

function dethrottled(fun , delay) {

  var timer;

  return (...arg) =>{
    if(!timer){
      fun(...arg)
      timer = setTimeout(() =>{
        timer = null;
      }, delay)

    }

  }
  
}

function handleDebounsed() {
  setdebounseGunCount(storeDebounseCount)
}
function storeDebounsecount(prev) {
  setstoreDebounseCount(prev => prev + 1)
}

const debounsedfun = deBounsced(handleDebounsed , 1000)
const throtledfun = dethrottled(handleDebounsed , 1000)


  return (
    <div className="App">
      <main className='flex gap-8'>
        <Sidebar formShowhide={formShowhide} projects={formShow.projects} selectedProject={selectedProject}/>
        {content}
      </main>
    </div>
    // <>
    //   <div className='container w-[300px] h-[200px] flex gap-8'>
    //     <div className='normal-gun w-4 h-3 bg-black' onClick={()=>noramlGun()}></div>
    //     <span className='bullet  w-4 h-3 bg-red-600'></span>
    //     <span className='counter text-stone-800'>{normalGunCount}</span>
    //   </div>

    //   <div className='container w-[300px] h-[200px] flex gap-8'>
    //     <div className='debaounsed-gun w-4 h-3 bg-black' onClick={{storeDebounsecount , debounsedfun}}></div>
    //     <input onChange={debounsedfun}></input>
    //     <span className='bullet w-4 h-3 bg-red-600'></span>
    //     <span className='counter text-stone-800'>{}</span>
    //   </div>

    //   <div className='container w-[300px] h-[200px] flex gap-8'>
    //     <div className='throttled-gun w-4 h-3 bg-black'></div>
    //     <input onChange={throtledfun}></input>
    //     <span className='bullet w-4 h-3 bg-red-600'></span>
    //     <span className='counter text-stone-800'>{}</span>
    //   </div>
    // </>
    // <>
    //   <ColorContextProvider1>
    //   {/* <Page />
    //   <APICall />
    //   <Link to="/contact">Contact</Link> */}
    //   <Header />
    //   <Outlet />
    //   </ColorContextProvider1>
    // </>
  );
}


export default App;

import React from "react";
import Button from "./Button";
const classList = "text-slate-400";
const Sidebar = ({formShowhide, projects ,selectedProject}) => {
  return (
    <aside className="h-screen w-64 bg-slate-900 text-slate-200 mt-8 rounded-tr-md">
      <h2 className="text-xl text-slate-300 pt-9 pl-14 pr-14 uppercase text-xss">
        Your Project
      </h2>
      {/* <div className="flex justify-center text-sm text-slate-300 m-5 bg-slate-800 hover:bg-slate-700 hover:text-slate-300 rounded-lg">
        <button className=' pt-4 pb-4 text-slate-400'>
                + Add Project
            </button>

        
      </div> */}
      <Button onClick={formShowhide}>+ Add Project</Button>
      <ul className="m-4">
        {projects.map(project => <li key={project.id} onClick={() => selectedProject(project.id)} className="w-full pl-2 pr-2 pt-1 pb-1 ml-2 mr-6 rounded-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800">{project.title}</li>)}
      </ul>
      </aside>
    );
};

export default Sidebar;

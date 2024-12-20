import React from 'react'
import Button from './Button'
const classList = "pt-4 pb-4 text-slate-400"

const NoProjectSelected = ({formShowhide}) => {
  return (
    <div className='flex flex-col items-center w-full m-16'>
        <img w-56 src="https://static.javatpoint.com/computer/images/how-to-open-the-windows-my-documents-or-documents-folder.png" alt="" />
        <h2 className='text-center w-96 h-8 text-4xl'>No Project Selected</h2>
        <p className='text-center m-3 w-96'>Select Project or Start with new one</p>
        <Button classList={classList} onClick={formShowhide}>Create new project</Button>

    </div>
  )
}

export default NoProjectSelected
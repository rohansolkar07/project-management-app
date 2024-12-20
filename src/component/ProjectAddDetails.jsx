import React, { useRef } from 'react'
import Button from './Button'
import Input from './Input'
import { type } from '@testing-library/user-event/dist/type'
import Modal from './Modal'
const classListBtn = " w-56" 

const ProjectAddDetails = ({onAdd,onCancel}) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const dialog = useRef()

    function savedata() {
        const enteredTitle =title.current.value
        const enteredDescription =description.current.value
        const enteredDate =date.current.value
       

        if (enteredDate.trim() === "" || enteredDescription.trim() === "" || enteredDate.trim() === "") {
            dialog.current.open();
            return
        }

        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            date : enteredDate
        })
    }
  return (
    <>
    <Modal ref={dialog} btnText ={"Close"}>
        <h1 className='text-4xl blod m-5'>Invalid Input</h1>
        <p className='text-xl'>Oops... looks like you forgot to enter value</p>
    </Modal>
    <div className='m-16'>
        <h2 className='w-96 h-8  text-4xl  ml-[100px] text-gray-950 bold m-10'>Add Project Info</h2>
        <div className='flex justify-center gap-3 m-4'>
            <Button onClick={onCancel} classList= {classListBtn} bgBtn={"bg-slate-100 text-black hover:text-black"}>Cancel</Button>
            <Button onClick={savedata} classList= {classListBtn}>Save</Button>
            
        </div>
        <Input type="test" ref={title} labal={"Title"}/>
        <Input type="textarea" ref={description} labal={"Description"} isTextArea={true}/>
        <Input type="date" ref={date} labal={"Date"}/>
    </div>
    </>
  )
}

export default ProjectAddDetails
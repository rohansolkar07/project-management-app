import React, { createRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal  } from 'react-dom'

const Modal = forwardRef(({children , btnText}, ref) => {
    const dialog = createRef();
    useImperativeHandle(ref, () =>{
        return {
            open(){
                dialog.current.showModal();
            }
        
        }
    })
  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 text-blue-900 w-1/3 h-1/3 rounded-lg text-center overflow-hidden'>
        {children}
        <form method='dialog'>
            <button className='m-16 py-2 px-7 border-zinc-950 border-2 rounded-lg bg-red-900 text-slate-100'>
                {btnText}
            </button>
        </form>
    </dialog>,document.getElementById("modal-root")
  )
})

export default Modal
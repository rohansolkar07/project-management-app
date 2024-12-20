import React from 'react'

const Button = ({classList,children, bgBtn, ...props}) => {
  const bgBtn1 = bgBtn === undefined ? "w-56 flex justify-center text-sm  m-5 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-slate-300" : "w-56 flex justify-center text-sm  m-5 rounded-lg " + bgBtn
  return (
    <div className={bgBtn1}{...props}>
        <button className='pt-4 pb-4 text-slate-400'>
                {children}
            </button>
      </div>
  )
}

export default Button
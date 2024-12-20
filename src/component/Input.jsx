import React, { forwardRef } from "react";

const Input = forwardRef(({labal , isTextArea,type,...props},ref) => {
  return (
    <div className="flex flex-col mt-7 w-96">
      <label className="text-xl">{labal}</label><br/>
      <input ref={ref} type={type} className={isTextArea ? `bg-stone-300 h-24 hover:border-b-2 hover:border-gray-700` : `bg-stone-300 h-10 hover:border-b-2 hover:border-gray-700`}/>
    </div>
  );
});

export default Input;

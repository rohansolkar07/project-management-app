import React, { createContext, useState , useReducer } from 'react'

export const ColorContect = createContext({
    color : "light",
    toggleColor : () => {}
})



const ColorContextProvider1 = ({children}) => {

    
    const [color , setColor] =useState()

    const toggleColor = () => {
        setColor( prev => prev === "light" ? "dark" : "light")
    }

  return (
    <div>
        <ColorContect.Provider value={{color , toggleColor}}>
        {children}
        </ColorContect.Provider>
    </div>
  )
}

export default ColorContextProvider1
import React, { useContext, useState } from 'react'
import { ColorContect } from './ColorContextProvider1'

const Header = () => {

    const [time , setTime] =useState()
    function clock(params) {
        const date = new Date();
        console.log(date);
    
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        let pmorma;
        h = h > 12 ? h = h-12 : h
        h = h > 9 ? h : "0"+h
        m = m > 9 ? m : "0"+m
        s = s > 9 ? s : "0"+s
        h > 12 ? pmorma = "PM" : pmorma = "AM"
        // (h== "00" && m == "00" && s == "00") ? pmorma = 

        if(pmorma == "AM" && h == 12){
            pmorma = "PM"
        }
        else{
            pmorma = "AM"
        }
    
        setTime(h + ":" + m + ":" + s + " " + pmorma);
        
    }
    setInterval(clock,1000)


    const Colorctx = useContext(ColorContect)
  return (
    <div>
        <h1  className={Colorctx.color}>Header</h1>
        <button onClick={Colorctx.toggleColor}>Toggle</button>
        <h2>{time}</h2>
    </div>
  )
}

export default Header
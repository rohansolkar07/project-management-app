import React from 'react'
import Header from './Header'
import { ColorContect } from './ColorContextProvider1'
import { useReducer } from 'react'

export function counterReducer(state , actions) {
    debugger
    if(actions.type == "Increment"){
        state.count++
    }
    if(actions.type == "Decreament"){
        state.count--
    }

    return {
        count : state.count
    }
  }

  

const Page = () => {

    function handleIncreamnet(){
        setCounter({
            type : "Increment",
        })
     }
     function handleDecreament(){
        setCounter({
            type : "Decreament",
        })
     }

    const [counter , setCounter] = useReducer(counterReducer , {
        count : 0
    })
  return (
    <div>
        {/* <Header /> */}

        <h1>{counter.count}</h1>

        <button onClick={handleIncreamnet}>Increment</button>
        <button onClick={handleDecreament}>Decreament</button>
    </div>
  )
}

export default Page
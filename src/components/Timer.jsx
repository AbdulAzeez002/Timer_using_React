import React, { useEffect } from 'react'
import { useState } from 'react'

function Timer() {

    const [count,setCount]=useState(0)
    const[running,setRunning]=useState(false)

    const start=()=>{
        setRunning(true)
    }
    const stops=()=>{
        setRunning(false)
    }

    const reset=()=>{
        setRunning(false)
        setCount(0)
    }

    useEffect(()=>{
        let interval;
    if(running){
        interval=setInterval(()=>{
         setCount((count)=>count+1)
        },1000)
    }
    
    return ()=>{
        clearInterval(interval)
    }

    },[running])

  return (<>
  <div className='text-6xl text-center mb-20 mt-5'>
      Timer
  </div>
  <div className='flex justify-center items-center flex-col h-auto'>
         <div className='border border-black  mb-6'>
         <h1  className='text-5xl mb-5  px-5'>{count}</h1>
         </div>
        
        <div>
        <button className='mr-2 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded' onClick={start}>start</button>
        <button className='mr-2 bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded' onClick={stops}>Stop</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={reset}>Reset</button>
        </div>
        
    </div>
  </>
    
  )
}

export default Timer
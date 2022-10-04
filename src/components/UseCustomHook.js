import React from 'react'
import FetchData from '../CustomHook/FetchData'
 const UseCustomHook = () => {
    const [state] = FetchData('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>
        {
            state.map((e)=>{
                return (
                    
                <div className='Item'>
                    <h3>{e.title}</h3>
                </div>
                )
            })
        }
    </div>
  )
}


export default UseCustomHook;
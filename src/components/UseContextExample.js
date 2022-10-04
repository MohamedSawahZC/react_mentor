import React,{createContext,useState} from 'react'

//1- Create Context
const ColorContext = createContext();
//2- Create Provider Function


 const UseContextProvider = ({children}) => {
    const [data,setData]=useState('white');
    const changeData = (color)=>{
        setData(color)
    }
  return (
    <div className='Main'>
       <ColorContext.Provider value={{data,changeData}}>
        {children}
       </ColorContext.Provider>
    </div>
  )
}
//3- Export context to use , Provider to wrap all components
export {
    UseContextProvider,
    ColorContext,
} 
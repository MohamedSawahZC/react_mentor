import React,{createContext} from 'react'

//1- Create Context
const ColorContext = createContext();
//2- Create Provider Function


 const UseContextProvider = ({children}) => {
  return (
    <div className='Main'>
       <ColorContext.Provider value='white'>
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
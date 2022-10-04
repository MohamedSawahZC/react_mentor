import React,{useRef,useContext} from 'react'
import { ColorContext } from './UseContextExample';

 const UseRefExample = () => {
  const valueInput = useRef(null);
  console.log(valueInput)
  const OnClickButton = ()=>{
    changeData(valueInput.current.value)
  }

  const {changeData} = useContext(ColorContext);

  return (
    <div className='Main'>

    <input type='text' ref={valueInput}></input>
    <button onClick={OnClickButton} >Focus</button>
    </div>
  )
}

export default UseRefExample;

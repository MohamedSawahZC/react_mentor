import { Button } from 'react-bootstrap';
import React,{useState} from 'react'

 const StateComp = () => {
   const [count,setCount]=useState(0); 
   const [text,setText]=useState(''); 
   const Increase=()=>{
    setCount(count+1)
   }
   const Decrease=()=>{
    setCount(count-1)
   }
   const textSet=(e)=>{
    setText(e.target.value)
   }
  return (
    <div>
        <div>{count}</div>
    <Button onClick={Increase} variant='primary' >Increase counter</Button>
    <Button onClick={Decrease} variant='primary' >Decrease counter</Button>
    <h1>{text}</h1>
    <input type="text" value={text} onChange={textSet}></input>
    </div>
  )
}

export default StateComp;
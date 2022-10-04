import React,{useRef} from 'react'

 const UseRefExample = () => {
  const valueInput = useRef(null);
  console.log(valueInput)
  const focus = ()=>{
    valueInput.current.focus();
    console.log(valueInput.current.value)
  }
  return (
    <div className='Main'>

    <input type='text' ref={valueInput}></input>
    <button onClick={focus} >Focus</button>
    </div>
  )
}

export default UseRefExample;

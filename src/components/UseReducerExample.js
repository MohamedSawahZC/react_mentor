import React,{useState,useReducer} from 'react'
import reducer from '../Reducer/ReducerTest';
const initialValue= {
  count:0
}


 const UseReducerExample = () => {
  const [state,dispatcher] = useReducer(reducer,initialValue);

  return ( 
    <div>
      value is {state.count}
      <button onClick={() => dispatcher({type:'-'})}>-</button>
      <button onClick={() => dispatcher({type:'+'})}>+</button>
      <button onClick={() => dispatcher({type:'reset'})}>reset</button>
    </div>
  )
}


export default UseReducerExample;
